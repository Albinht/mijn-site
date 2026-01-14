-- Add translations JSONB for manual multi-language content
ALTER TABLE "Article" ADD COLUMN IF NOT EXISTS "translations" JSONB;
ALTER TABLE "Page" ADD COLUMN IF NOT EXISTS "translations" JSONB;
