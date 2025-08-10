# Dynamic Dashboard Implementation Plan

## Overview
Transform the static admin dashboard into a fully dynamic system with database integration, real API endpoints, and live data management.

## Phase 1: Database Setup ✅ COMPLETED (Week 1)

### 1.1 Database Selection & Setup
- **Implemented: SQLite with Prisma ORM**
  - Setup Prisma for database management
  - Created migration system
  - Database file: `./dev.db`

### 1.2 Database Schema Design
```sql
-- Users table ✅
users {
  id: UUID
  username: String (unique)
  email: String
  passwordHash: String
  role: UserRole (ADMIN/EDITOR/VIEWER)
  lastLogin: DateTime
  createdAt: DateTime
  updatedAt: DateTime
}

-- Sessions table ✅
sessions {
  id: UUID
  userId: UUID (FK)
  token: String
  expiresAt: DateTime
  ipAddress: String
  userAgent: String
  createdAt: DateTime
}

-- Login attempts table ✅
loginAttempts {
  id: UUID
  ipAddress: String
  username: String
  attemptedAt: DateTime
  success: Boolean
}

-- Articles table ✅
articles {
  id: UUID
  title: String
  topic: String
  content: Text
  status: ArticleStatus (DRAFT/PROCESSING/PUBLISHED)
  authorId: UUID (FK)
  slug: String
  views: Integer
  publishedAt: DateTime
  createdAt: DateTime
  updatedAt: DateTime
}

-- Pages table ✅
pages {
  id: UUID
  title: String
  slug: String
  content: Text
  metaDescription: String
  status: PageStatus (DRAFT/PUBLISHED)
  type: String (marketing/service/tool/blueprint)
  views: Integer
  createdAt: DateTime
  updatedAt: DateTime
}

-- Analytics table ✅
analytics {
  id: UUID
  pagePath: String
  visitorId: String
  sessionId: String
  referrer: String
  userAgent: String
  deviceType: String
  country: String
  city: String
  duration: Integer
  timestamp: DateTime
}

-- Settings table ✅
settings {
  id: UUID
  key: String (unique)
  value: JSON
  category: String
  updatedBy: UUID (FK)
  updatedAt: DateTime
}

-- Webhook logs table ✅
webhookLogs {
  id: UUID
  url: String
  payload: JSON
  response: JSON
  statusCode: Integer
  success: Boolean
  createdAt: DateTime
}

-- Activity logs table ✅
activityLogs {
  id: UUID
  userId: UUID (FK)
  action: String
  entityType: String
  entityId: String
  metadata: JSON
  ipAddress: String
  timestamp: DateTime
}
```

## Phase 2: API Development (Week 2)

### 2.1 Authentication APIs (Update Existing)
- **POST /api/auth/login** ✅ COMPLETED
  - Store login attempts in database
  - Create session records
  - Track IP addresses
  
- **POST /api/auth/logout** ✅ COMPLETED
  - Invalidate session in database
  - Clear session records
  
- **GET /api/auth/verify**
  - Check session validity from database
  - Refresh token if needed

### 2.2 Content Management APIs
- **GET /api/content**
  - Fetch all content with pagination
  - Support filtering by type, status
  - Include search functionality
  
- **GET /api/content/:id**
  - Get single content item
  - Increment view counter
  
- **POST /api/content**
  - Create new content
  - Auto-generate slugs
  - Set default metadata
  
- **PUT /api/content/:id**
  - Update existing content
  - Track modification history
  
- **DELETE /api/content/:id**
  - Soft delete implementation
  - Archive old content

### 2.3 Articles APIs
- **GET /api/articles**
  - List all articles
  - Filter by status
  - Sort by date/views
  
- **POST /api/articles/generate**
  - Save article request to database
  - Trigger webhook
  - Return job ID for tracking
  
- **GET /api/articles/status/:jobId**
  - Check generation status
  - Return generated content when ready
  
- **PUT /api/articles/:id**
  - Update article content
  - Change publication status

### 2.4 Analytics APIs
- **GET /api/analytics/overview**
  - Real-time visitor count
  - Page views by timeframe
  - Bounce rate calculation
  
- **GET /api/analytics/pages**
  - Top performing pages
  - Views by page
  - Average time on page
  
- **GET /api/analytics/sources**
  - Traffic sources breakdown
  - Referrer analysis
  - Device type statistics
  
- **POST /api/analytics/track**
  - Record page views
  - Track user sessions
  - Store visitor data

### 2.5 Settings APIs
- **GET /api/settings**
  - Fetch all settings by category
  - Return as key-value pairs
  
- **PUT /api/settings**
  - Update multiple settings
  - Validate setting values
  - Log changes with user ID
  
- **GET /api/settings/:category**
  - Get settings for specific category

## Phase 3: Frontend Integration (Week 3)

### 3.1 Data Fetching Setup
- Implement SWR or React Query for data fetching
- Add loading states to all components
- Implement error boundaries
- Setup real-time updates with polling or WebSockets

### 3.2 Update Dashboard Components

#### Overview Page
```javascript
// Fetch real data
const { data: stats } = useSWR('/api/analytics/overview');
const { data: recentActivity } = useSWR('/api/activity/recent');
const { data: quickStats } = useSWR('/api/dashboard/stats');
```

#### Articles Page
```javascript
// Real article management
const { data: articles } = useSWR('/api/articles');
const generateArticle = async (topic) => {
  const response = await fetch('/api/articles/generate', {
    method: 'POST',
    body: JSON.stringify({ topic })
  });
  // Poll for completion
  pollForCompletion(response.jobId);
};
```

#### Analytics Page
```javascript
// Live analytics data
const { data: analytics } = useSWR(
  `/api/analytics/overview?range=${timeRange}`,
  { refreshInterval: 30000 } // Refresh every 30 seconds
);
```

#### Content Page
```javascript
// Dynamic content management
const { data: content } = useSWR(
  `/api/content?type=${filter.type}&status=${filter.status}&search=${searchQuery}`
);
```

#### Settings Page
```javascript
// Persist settings to database
const updateSettings = async (settings) => {
  await fetch('/api/settings', {
    method: 'PUT',
    body: JSON.stringify(settings)
  });
};
```

### 3.3 Real-time Features
- WebSocket connection for live updates
- Server-Sent Events for notifications
- Activity feed updates
- Live visitor counter
- Real-time article generation status

## Phase 4: Background Jobs & Services (Week 4)

### 4.1 Job Queue System
- Setup Bull or BullMQ for job processing
- Implement job workers for:
  - Article generation
  - Analytics aggregation
  - Email notifications
  - Webhook deliveries

### 4.2 Scheduled Tasks
- Daily analytics summary
- Weekly reports generation
- Content performance analysis
- Database cleanup
- Session expiration

### 4.3 Webhook Integration
- Reliable webhook delivery with retries
- Webhook event logging
- Response handling
- Error recovery

## Phase 5: Security Enhancements (Week 5)

### 5.1 Authentication Security
- Implement refresh tokens
- Add CSRF protection
- Session fingerprinting
- IP-based rate limiting from database

### 5.2 Data Validation
- Input sanitization on all endpoints
- SQL injection prevention
- XSS protection
- Request validation middleware

### 5.3 Audit Logging
- Track all admin actions
- Store modification history
- Login/logout events
- Failed attempt monitoring

## Phase 6: Performance Optimization (Week 5)

### 6.1 Database Optimization
- Add proper indexes
- Implement query optimization
- Setup connection pooling
- Add caching layer (Redis)

### 6.2 API Optimization
- Response caching
- Pagination implementation
- Lazy loading
- Data compression

### 6.3 Frontend Optimization
- Code splitting
- Lazy component loading
- Image optimization
- Bundle size reduction

## Phase 7: Monitoring & Logging (Week 5)

### 7.1 Application Monitoring
- Setup error tracking (Sentry)
- Performance monitoring
- Uptime monitoring
- Database query monitoring

### 7.2 Logging System
- Structured logging
- Log aggregation
- Error alerting
- Audit trail

## Phase 8: Testing & Deployment (Week 6)

### 8.1 Testing Implementation
- Unit tests for APIs
- Integration tests
- E2E tests for critical flows
- Load testing

### 8.2 Deployment Setup
- Environment variables management
- Database migrations automation
- CI/CD pipeline
- Rollback procedures

## Implementation Progress

### ✅ Week 1: Foundation - COMPLETED
1. Setup database (SQLite with Prisma) ✅
2. Created database schemas ✅
3. Updated authentication to use database ✅
4. Implemented session management ✅

### ✅ Week 2: Core APIs - COMPLETED
1. Build content management APIs ✅
2. Create articles APIs with webhook integration ✅
3. Implement analytics tracking APIs ✅
4. Setup settings management APIs ✅

### 📝 Week 3: Frontend Integration - PENDING
1. Add data fetching library (SWR/React Query)
2. Update all dashboard pages to use APIs
3. Implement loading and error states
4. Add real-time updates

### 📝 Week 4: Advanced Features - PENDING
1. Setup job queue system
2. Implement scheduled tasks
3. Add WebSocket for real-time features
4. Create audit logging

### 📝 Week 5: Optimization & Security - PENDING
1. Add caching layer
2. Implement security measures
3. Optimize database queries
4. Setup monitoring

### 📝 Week 6: Testing & Deployment - PENDING
1. Write comprehensive tests
2. Setup CI/CD pipeline
3. Configure production environment
4. Deploy and monitor

## Required Dependencies

```json
{
  "dependencies": {
    // Database ✅
    "@prisma/client": "^5.x",
    "prisma": "^5.x",
    
    // Authentication ✅
    "jose": "^5.x",
    "bcryptjs": "^2.x",
    
    // Caching (Week 5)
    "redis": "^4.x",
    "ioredis": "^5.x",
    
    // Job Queue (Week 4)
    "bull": "^4.x",
    "bullmq": "^5.x",
    
    // Real-time (Week 3-4)
    "socket.io": "^4.x",
    "socket.io-client": "^4.x",
    
    // Data Fetching (Week 3)
    "swr": "^2.x",
    // OR
    "@tanstack/react-query": "^5.x",
    
    // Validation (Week 2)
    "zod": "^3.x",
    
    // Monitoring (Week 5)
    "@sentry/nextjs": "^7.x",
    
    // Testing (Week 6)
    "jest": "^29.x",
    "@testing-library/react": "^14.x",
    "cypress": "^13.x"
  }
}
```

## Environment Variables

```env
# Database ✅
DATABASE_URL="file:./dev.db"

# Authentication ✅
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
SESSION_SECRET="your-session-secret-key-change-in-production"

# External Services ✅
WEBHOOK_URL="https://n8n-n8n.42giwj.easypanel.host/webhook-test/2f67b999-ee19-471a-9911-054d76177650"

# Redis (Week 5)
REDIS_URL=redis://localhost:6379

# Monitoring (Week 5)
SENTRY_DSN=your-sentry-dsn

# Email (Week 4)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password

# Analytics (Week 3)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## Success Metrics

- All data fetched from database in < 100ms
- Real-time updates working with < 1s delay
- 99.9% uptime for dashboard
- All API endpoints properly secured
- Comprehensive audit trail
- Automated testing coverage > 80%
- Performance monitoring in place
- Scalable to 10,000+ content items
- Support for multiple admin users

## Current Status

### Completed Features ✅
- Database setup with Prisma and SQLite
- User authentication with JWT
- Session management in database
- Login attempt tracking and rate limiting
- Basic dashboard UI with all pages
- Secure middleware for route protection
- Admin user seeded (Username: Niblah)

### Next Steps (Week 2)
1. Start with content management APIs
2. Implement articles API with database storage
3. Create analytics tracking endpoints
4. Build settings management system

## Notes

- Using SQLite for simpler local development (can migrate to PostgreSQL for production)
- JWT tokens stored as httpOnly cookies for security
- Rate limiting tracks by IP address with 15-minute cooldown
- All sensitive data properly hashed (passwords with bcrypt)
- Activity logging prepared for audit trails
- Webhook URL configured for article generation

This plan transforms the static dashboard into a production-ready, dynamic system with full database integration, real-time features, and enterprise-level security and monitoring.