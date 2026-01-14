import { z } from 'zod';

const translationSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  topic: z.string().min(1).max(200).optional(),
  content: z.string().optional(),
  metaTitle: z.string().max(200).optional(),
  metaDescription: z.string().max(160).optional(),
});

const translationsSchema = z.record(translationSchema).optional();

// Content validation schemas
export const createContentSchema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().min(1).max(200).optional(),
  content: z.string(),
  metaTitle: z.string().max(200).optional(),
  metaDescription: z.string().max(160).optional(),
  translations: translationsSchema,
  type: z.enum(['MARKETING', 'SERVICE', 'TOOL', 'BLUEPRINT', 'LANDING', 'marketing', 'service', 'tool', 'blueprint']),
  status: z.enum(['DRAFT', 'PUBLISHED']).default('DRAFT')
});

export const updateContentSchema = createContentSchema.partial();

export const contentQuerySchema = z.object({
  page: z.coerce.number().positive().default(1),
  limit: z.coerce.number().positive().max(100).default(10),
  type: z.enum(['MARKETING', 'SERVICE', 'TOOL', 'BLUEPRINT', 'LANDING', 'marketing', 'service', 'tool', 'blueprint']).optional(),
  status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
  search: z.string().optional(),
  sortBy: z.enum(['createdAt', 'updatedAt', 'views', 'title']).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
});

// Article validation schemas
export const createArticleSchema = z.object({
  topic: z.string().min(1).max(200),
  title: z.string().min(1).max(200).optional(),
  content: z.string().optional(),
  translations: translationsSchema,
  status: z.enum(['DRAFT', 'PROCESSING', 'PUBLISHED']).default('DRAFT')
});

export const updateArticleSchema = z.object({
  title: z.string().min(1).max(200).optional(),
  content: z.string().optional(),
  status: z.enum(['DRAFT', 'PROCESSING', 'PUBLISHED']).optional()
});

export const articleQuerySchema = z.object({
  page: z.coerce.number().positive().default(1),
  limit: z.coerce.number().positive().max(100).default(10),
  status: z.enum(['DRAFT', 'PROCESSING', 'PUBLISHED']).optional(),
  search: z.string().optional(),
  sortBy: z.enum(['createdAt', 'updatedAt', 'views', 'title']).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc')
});

// Analytics validation schemas
export const trackAnalyticsSchema = z.object({
  pagePath: z.string(),
  visitorId: z.string().optional(),
  sessionId: z.string().optional(),
  referrer: z.string().optional(),
  userAgent: z.string().optional(),
  deviceType: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  duration: z.number().optional()
});

export const analyticsQuerySchema = z.object({
  range: z.enum(['today', 'week', 'month', 'year', 'all']).default('week'),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  page: z.coerce.number().positive().default(1),
  limit: z.coerce.number().positive().max(100).default(10)
});

// Settings validation schemas
export const updateSettingsSchema = z.object({
  settings: z.array(z.object({
    key: z.string(),
    value: z.any(),
    category: z.string()
  }))
});

export const settingsCategorySchema = z.object({
  category: z.string()
});

// Pagination helper
export function getPaginationParams(query) {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const skip = (page - 1) * limit;
  
  return { skip, limit, page };
}
