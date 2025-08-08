-- AI Headshots Database Schema
-- Target: PostgreSQL for production, SQLite for development

-- ============================================================================
-- CORE USER MANAGEMENT
-- ============================================================================

-- Users table - extends basic user info for headshot service
CREATE TABLE headshots_users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'user', -- user, admin, team_admin
    locale VARCHAR(10) DEFAULT 'nl',
    stripe_customer_id VARCHAR(255),
    total_jobs_created INTEGER DEFAULT 0,
    total_headshots_generated INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- PRICING & PLANS
-- ============================================================================

-- Plans table - different headshot packages
CREATE TABLE headshots_plans (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL, -- Basic, Professional, Executive
    slug VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    price_eur DECIMAL(10,2) NOT NULL,
    price_usd DECIMAL(10,2) NOT NULL,
    headshot_count INTEGER NOT NULL, -- 40, 100, 150
    combo_count INTEGER NOT NULL, -- 4, 10, 15 (outfit+backdrop combinations)
    edit_credits INTEGER DEFAULT 0, -- 0, 10, 20
    eta_hours INTEGER NOT NULL, -- 3, 2, 1
    resolution VARCHAR(20) DEFAULT 'premium', -- premium, 4k
    features JSONB, -- Additional features like print-ready, landscape, etc.
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- JOBS & PROCESSING
-- ============================================================================

-- Jobs table - main processing pipeline
CREATE TABLE headshots_jobs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES headshots_users(id) ON DELETE CASCADE,
    plan_id INTEGER REFERENCES headshots_plans(id),
    team_id INTEGER, -- NULL for individual jobs
    status VARCHAR(50) DEFAULT 'created', -- created, uploading, processing, completed, failed, refunded
    eta_minutes INTEGER, -- Estimated time in minutes based on plan
    input_count INTEGER DEFAULT 0,
    expected_output_count INTEGER DEFAULT 0,
    actual_output_count INTEGER DEFAULT 0,
    style_selections JSONB, -- Selected outfits, backdrops, framing preferences
    processing_metadata JSONB, -- ML pipeline metadata, embeddings, etc.
    error_message TEXT,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    inputs_deleted_at TIMESTAMP, -- Auto-delete after 7 days
    outputs_delete_at TIMESTAMP, -- Auto-delete after 30 days
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- FILE MANAGEMENT
-- ============================================================================

-- Input uploads - user selfies
CREATE TABLE headshots_uploads (
    id SERIAL PRIMARY KEY,
    job_id INTEGER REFERENCES headshots_jobs(id) ON DELETE CASCADE,
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255),
    s3_bucket VARCHAR(100),
    s3_key VARCHAR(500) NOT NULL,
    file_size INTEGER,
    mime_type VARCHAR(100),
    width INTEGER,
    height INTEGER,
    quality_score DECIMAL(3,2), -- 0.00 to 1.00
    face_detected BOOLEAN DEFAULT false,
    face_confidence DECIMAL(3,2),
    similarity_embedding JSONB, -- Face embedding for identity consistency
    validation_flags JSONB, -- blur, exposure, occlusion, etc.
    is_rejected BOOLEAN DEFAULT false,
    rejection_reason TEXT,
    deleted_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Style combinations - outfit + backdrop pairings
CREATE TABLE headshots_style_combos (
    id SERIAL PRIMARY KEY,
    job_id INTEGER REFERENCES headshots_jobs(id) ON DELETE CASCADE,
    outfit_id VARCHAR(100) NOT NULL, -- Reference to outfit preset
    backdrop_id VARCHAR(100) NOT NULL, -- Reference to backdrop preset
    framing VARCHAR(50) DEFAULT 'portrait', -- portrait, landscape, square
    shot_type VARCHAR(50) DEFAULT 'torso', -- close-up, torso, full-body
    expected_count INTEGER DEFAULT 10, -- Images per combo
    actual_count INTEGER DEFAULT 0,
    processing_status VARCHAR(50) DEFAULT 'pending', -- pending, processing, completed, failed
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Generated output images
CREATE TABLE headshots_outputs (
    id SERIAL PRIMARY KEY,
    job_id INTEGER REFERENCES headshots_jobs(id) ON DELETE CASCADE,
    combo_id INTEGER REFERENCES headshots_style_combos(id) ON DELETE CASCADE,
    filename VARCHAR(255) NOT NULL,
    s3_bucket VARCHAR(100),
    s3_key VARCHAR(500) NOT NULL,
    thumbnail_s3_key VARCHAR(500), -- Smaller version for gallery
    file_size INTEGER,
    width INTEGER,
    height INTEGER,
    similarity_score DECIMAL(3,2), -- Identity similarity to input faces
    quality_score DECIMAL(3,2), -- Overall quality assessment
    is_favorite BOOLEAN DEFAULT false,
    is_flagged BOOLEAN DEFAULT false, -- Quality control flag
    flag_reason TEXT,
    generation_metadata JSONB, -- Model parameters, seed, etc.
    deleted_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- EDITING & CUSTOMIZATION
-- ============================================================================

-- Edit credits usage tracking
CREATE TABLE headshots_edit_credits (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES headshots_users(id) ON DELETE CASCADE,
    job_id INTEGER REFERENCES headshots_jobs(id) ON DELETE CASCADE,
    image_id INTEGER REFERENCES headshots_outputs(id) ON DELETE CASCADE,
    edit_type VARCHAR(50) NOT NULL, -- crop, exposure, background_swap, retouch, color_adjust
    credits_used INTEGER DEFAULT 1,
    edit_parameters JSONB, -- Specific edit settings
    result_s3_key VARCHAR(500), -- New edited image
    used_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- TEAM MANAGEMENT
-- ============================================================================

-- Teams for bulk/enterprise orders
CREATE TABLE headshots_teams (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES headshots_users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    seats_purchased INTEGER NOT NULL,
    seats_used INTEGER DEFAULT 0,
    discount_tier VARCHAR(50), -- volume_10, volume_25, volume_50, enterprise
    discount_percentage DECIMAL(5,2) DEFAULT 0.00,
    billing_email VARCHAR(255),
    company_name VARCHAR(255),
    brand_guidelines JSONB, -- Approved outfits, backdrops, styling rules
    is_active BOOLEAN DEFAULT true,
    expires_at TIMESTAMP, -- For subscription-based teams
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Team member associations
CREATE TABLE headshots_team_members (
    id SERIAL PRIMARY KEY,
    team_id INTEGER REFERENCES headshots_teams(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES headshots_users(id) ON DELETE CASCADE,
    role VARCHAR(50) DEFAULT 'member', -- admin, member
    jobs_completed INTEGER DEFAULT 0,
    headshots_generated INTEGER DEFAULT 0,
    invited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    joined_at TIMESTAMP,
    status VARCHAR(50) DEFAULT 'invited', -- invited, active, inactive
    UNIQUE(team_id, user_id)
);

-- ============================================================================
-- PAYMENTS & BILLING
-- ============================================================================

-- Payment transactions
CREATE TABLE headshots_payments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES headshots_users(id),
    job_id INTEGER REFERENCES headshots_jobs(id),
    team_id INTEGER REFERENCES headshots_teams(id),
    stripe_payment_intent_id VARCHAR(255) UNIQUE,
    stripe_session_id VARCHAR(255),
    amount_eur DECIMAL(10,2),
    amount_usd DECIMAL(10,2),
    currency VARCHAR(3) DEFAULT 'EUR',
    status VARCHAR(50) DEFAULT 'pending', -- pending, succeeded, failed, refunded
    plan_name VARCHAR(100),
    discount_applied DECIMAL(5,2) DEFAULT 0.00,
    refund_amount DECIMAL(10,2) DEFAULT 0.00,
    refund_reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- REVIEWS & SOCIAL PROOF
-- ============================================================================

-- Customer reviews and testimonials
CREATE TABLE headshots_reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES headshots_users(id),
    job_id INTEGER REFERENCES headshots_jobs(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    content TEXT,
    reviewer_name VARCHAR(255),
    reviewer_title VARCHAR(255),
    reviewer_company VARCHAR(255),
    is_featured BOOLEAN DEFAULT false,
    is_approved BOOLEAN DEFAULT false,
    approved_by INTEGER REFERENCES headshots_users(id),
    approved_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- PRIVACY & COMPLIANCE
-- ============================================================================

-- Data deletion requests and compliance
CREATE TABLE headshots_deletion_requests (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES headshots_users(id),
    job_id INTEGER REFERENCES headshots_jobs(id),
    request_type VARCHAR(50) NOT NULL, -- inputs_only, outputs_only, full_job, full_account
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pending', -- pending, processing, completed, failed
    deletion_metadata JSONB, -- What was deleted, file counts, etc.
    requested_by VARCHAR(50) DEFAULT 'user' -- user, system, admin
);

-- ============================================================================
-- ANALYTICS & MONITORING
-- ============================================================================

-- Job performance metrics
CREATE TABLE headshots_job_metrics (
    id SERIAL PRIMARY KEY,
    job_id INTEGER REFERENCES headshots_jobs(id) ON DELETE CASCADE,
    metric_name VARCHAR(100) NOT NULL,
    metric_value DECIMAL(10,4),
    metadata JSONB,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- System-wide analytics
CREATE TABLE headshots_analytics_events (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES headshots_users(id),
    event_type VARCHAR(100) NOT NULL,
    event_data JSONB,
    session_id VARCHAR(255),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- STYLE PRESETS & CONTENT
-- ============================================================================

-- Outfit presets (could be managed via admin or config files)
CREATE TABLE headshots_outfit_presets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    category VARCHAR(100), -- business, casual, creative, etc.
    tags JSONB, -- colors, formality level, industry, etc.
    prompt_template TEXT NOT NULL, -- AI generation prompt
    preview_image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    tier_required VARCHAR(50) DEFAULT 'free', -- free, pro, executive
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Backdrop presets
CREATE TABLE headshots_backdrop_presets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    category VARCHAR(100), -- office, studio, outdoor, abstract, etc.
    environment_type VARCHAR(100), -- indoor, outdoor, studio
    prompt_template TEXT NOT NULL,
    preview_image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    tier_required VARCHAR(50) DEFAULT 'free',
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================================

-- User lookups
CREATE INDEX idx_headshots_users_email ON headshots_users(email);
CREATE INDEX idx_headshots_users_stripe_customer ON headshots_users(stripe_customer_id);

-- Job queries
CREATE INDEX idx_headshots_jobs_user_id ON headshots_jobs(user_id);
CREATE INDEX idx_headshots_jobs_status ON headshots_jobs(status);
CREATE INDEX idx_headshots_jobs_team_id ON headshots_jobs(team_id);
CREATE INDEX idx_headshots_jobs_created_at ON headshots_jobs(created_at);

-- File management
CREATE INDEX idx_headshots_uploads_job_id ON headshots_uploads(job_id);
CREATE INDEX idx_headshots_uploads_s3_key ON headshots_uploads(s3_key);
CREATE INDEX idx_headshots_outputs_job_id ON headshots_outputs(job_id);
CREATE INDEX idx_headshots_outputs_combo_id ON headshots_style_combos(id);

-- Team queries
CREATE INDEX idx_headshots_team_members_team_id ON headshots_team_members(team_id);
CREATE INDEX idx_headshots_team_members_user_id ON headshots_team_members(user_id);

-- Analytics
CREATE INDEX idx_headshots_analytics_events_user_id ON headshots_analytics_events(user_id);
CREATE INDEX idx_headshots_analytics_events_type_created ON headshots_analytics_events(event_type, created_at);

-- Auto-deletion support
CREATE INDEX idx_headshots_jobs_inputs_delete ON headshots_jobs(inputs_deleted_at) WHERE inputs_deleted_at IS NULL;
CREATE INDEX idx_headshots_jobs_outputs_delete ON headshots_jobs(outputs_delete_at) WHERE outputs_delete_at < CURRENT_TIMESTAMP;

-- ============================================================================
-- SAMPLE DATA INSERT
-- ============================================================================

-- Insert default plans
INSERT INTO headshots_plans (name, slug, description, price_eur, price_usd, headshot_count, combo_count, edit_credits, eta_hours, resolution, features) VALUES 
('Basic', 'basic', '40 professional headshots with 4 outfit+backdrop combinations', 29.00, 32.00, 40, 4, 0, 3, 'premium', '{"turnaround": "up to 3 hours", "formats": ["jpg", "png"]}'),
('Professional', 'professional', '100 headshots with 10 combinations and editing credits', 39.00, 43.00, 100, 10, 10, 2, 'premium', '{"turnaround": "up to 2 hours", "formats": ["jpg", "png"], "editing": true}'),
('Executive', 'executive', '150 4K headshots with 15 combinations and priority processing', 59.00, 65.00, 150, 15, 20, 1, '4k', '{"turnaround": "~1 hour", "formats": ["jpg", "png", "print_ready"], "4k": true, "priority": true}');

-- Insert sample outfit presets
INSERT INTO headshots_outfit_presets (name, slug, description, category, tags, prompt_template, tier_required) VALUES 
('Navy Business Suit', 'navy-suit', 'Classic navy blue business suit with white shirt', 'business', '["formal", "navy", "professional", "suit"]', 'professional business suit in navy blue, white shirt, professional tie, well-fitted, formal business attire', 'free'),
('Black Blazer', 'black-blazer', 'Smart black blazer for professional settings', 'business', '["formal", "black", "blazer", "versatile"]', 'black business blazer, professional appearance, smart casual, well-tailored', 'free'),
('Charcoal Turtleneck', 'charcoal-turtleneck', 'Modern charcoal grey turtleneck sweater', 'business', '["modern", "grey", "turtleneck", "casual"]', 'charcoal grey turtleneck sweater, modern professional look, sophisticated', 'pro'),
('White Dress Shirt', 'white-shirt', 'Crisp white dress shirt, timeless and professional', 'business', '["classic", "white", "shirt", "clean"]', 'crisp white dress shirt, professional, clean, well-fitted, business appropriate', 'free');

-- Insert sample backdrop presets  
INSERT INTO headshots_backdrop_presets (name, slug, description, category, environment_type, prompt_template, tier_required) VALUES 
('Modern Office', 'modern-office', 'Clean modern office environment', 'office', 'indoor', 'modern office background, professional workspace, clean lines, contemporary', 'free'),
('Studio Grey', 'studio-grey', 'Professional grey studio backdrop', 'studio', 'studio', 'professional grey studio background, seamless, professional photography studio', 'free'),
('Bookshelf Office', 'bookshelf-office', 'Executive office with bookshelf background', 'office', 'indoor', 'executive office with bookshelf background, professional library, sophisticated', 'pro'),
('City Skyline', 'city-skyline', 'Urban city skyline background', 'urban', 'outdoor', 'city skyline background, urban professional setting, sophisticated cityscape', 'executive');