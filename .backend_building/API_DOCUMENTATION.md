# Admin Dashboard API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication
All protected endpoints require a valid JWT token in the `auth-token` cookie. This token is automatically set when logging in.

### Auth Endpoints

#### POST /api/auth/login
Login with username and password.

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "username": "string",
    "email": "string",
    "role": "ADMIN|EDITOR|VIEWER"
  }
}
```

#### POST /api/auth/logout
Logout current user.

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## Content Management APIs

### GET /api/content
Get paginated list of content pages.

**Query Parameters:**
- `page` (number, default: 1) - Page number
- `limit` (number, default: 10, max: 100) - Items per page
- `type` (enum: marketing|service|tool|blueprint) - Filter by type
- `status` (enum: DRAFT|PUBLISHED) - Filter by status
- `search` (string) - Search in title, content, and description
- `sortBy` (enum: createdAt|updatedAt|views|title, default: createdAt)
- `sortOrder` (enum: asc|desc, default: desc)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "string",
      "slug": "string",
      "type": "string",
      "status": "DRAFT|PUBLISHED",
      "views": 0,
      "metaDescription": "string",
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "totalPages": 10,
      "hasMore": true
    }
  }
}
```

### GET /api/content/:id
Get single content page by ID.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "string",
    "slug": "string",
    "content": "string",
    "type": "string",
    "status": "DRAFT|PUBLISHED",
    "views": 0,
    "metaDescription": "string",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

### POST /api/content
Create new content page. **Requires authentication.**

**Request Body:**
```json
{
  "title": "string (required)",
  "slug": "string (optional, auto-generated if not provided)",
  "content": "string",
  "metaDescription": "string (max 160 chars)",
  "type": "marketing|service|tool|blueprint",
  "status": "DRAFT|PUBLISHED (default: DRAFT)"
}
```

### PUT /api/content/:id
Update existing content page. **Requires authentication.**

**Request Body:** (all fields optional)
```json
{
  "title": "string",
  "content": "string",
  "metaDescription": "string",
  "type": "marketing|service|tool|blueprint",
  "status": "DRAFT|PUBLISHED"
}
```

### DELETE /api/content/:id
Soft delete content page (sets status to DRAFT). **Requires authentication.**

---

## Articles APIs

### GET /api/articles
Get paginated list of articles.

**Query Parameters:**
- `page` (number, default: 1)
- `limit` (number, default: 10, max: 100)
- `status` (enum: DRAFT|PROCESSING|PUBLISHED)
- `search` (string) - Search in title, topic, and content
- `sortBy` (enum: createdAt|updatedAt|views|title, default: createdAt)
- `sortOrder` (enum: asc|desc, default: desc)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "string",
      "topic": "string",
      "status": "DRAFT|PROCESSING|PUBLISHED",
      "views": 0,
      "author": {
        "id": "uuid",
        "username": "string",
        "email": "string"
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "publishedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "totalPages": 5,
      "hasMore": true
    }
  }
}
```

### GET /api/articles/:id
Get single article by ID.

### POST /api/articles/generate
Generate new article with webhook integration. **Requires authentication.**

**Request Body:**
```json
{
  "topic": "string (required)",
  "title": "string (optional)",
  "content": "string (optional)",
  "status": "DRAFT|PROCESSING|PUBLISHED (default: DRAFT)"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "article": { /* article object */ },
    "jobId": "uuid",
    "message": "Article generation started"
  }
}
```

### PUT /api/articles/:id
Update article. **Requires authentication.**

**Request Body:**
```json
{
  "title": "string",
  "content": "string",
  "status": "DRAFT|PROCESSING|PUBLISHED"
}
```

### DELETE /api/articles/:id
Delete article permanently. **Requires authentication.**

---

## Analytics APIs

### POST /api/analytics/track
Track page view (public endpoint).

**Request Body:**
```json
{
  "pagePath": "string (required)",
  "visitorId": "string (optional)",
  "sessionId": "string (optional)",
  "referrer": "string (optional)",
  "userAgent": "string (optional)",
  "deviceType": "string (optional)",
  "country": "string (optional)",
  "city": "string (optional)",
  "duration": "number (optional)"
}
```

### GET /api/analytics/overview
Get analytics overview. **Requires authentication.**

**Query Parameters:**
- `range` (enum: today|week|month|year|all, default: week)
- `startDate` (string, ISO date)
- `endDate` (string, ISO date)

**Response:**
```json
{
  "success": true,
  "data": {
    "metrics": {
      "totalViews": 1000,
      "uniqueVisitors": 500,
      "totalSessions": 600,
      "avgDuration": 120,
      "bounceRate": 45.5
    },
    "devices": {
      "desktop": 600,
      "mobile": 350,
      "tablet": 50
    },
    "topPages": [
      {
        "path": "/page-slug",
        "views": 100
      }
    ],
    "recentViews": [ /* recent view entries */ ],
    "dateRange": {
      "range": "week",
      "startDate": "2024-01-01T00:00:00Z",
      "endDate": null
    }
  }
}
```

### GET /api/analytics/pages
Get page-specific analytics. **Requires authentication.**

**Query Parameters:**
- `page` (number, default: 1)
- `limit` (number, default: 10)

**Response:**
```json
{
  "success": true,
  "data": {
    "pages": [
      {
        "id": "uuid",
        "title": "string",
        "path": "/page-slug",
        "type": "page|article",
        "category": "string",
        "views": 100,
        "avgDuration": 120,
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  }
}
```

### GET /api/analytics/sources
Get traffic sources analytics. **Requires authentication.**

**Query Parameters:**
- `range` (enum: today|week|month|year|all, default: week)

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": {
      "direct": 400,
      "search": 300,
      "social": 200,
      "referral": 100
    },
    "referrers": [
      {
        "source": "google.com",
        "visits": 250,
        "type": "search"
      }
    ],
    "locations": [
      {
        "country": "Netherlands",
        "city": "Amsterdam",
        "visits": 150
      }
    ],
    "devices": {
      "desktop": 600,
      "mobile": 350,
      "tablet": 50
    }
  }
}
```

---

## Settings APIs

### GET /api/settings
Get all settings. **Requires authentication.**

**Query Parameters:**
- `category` (string) - Filter by category

**Response:**
```json
{
  "success": true,
  "data": {
    "settings": {
      "general": {
        "siteName": {
          "value": "My Site",
          "updatedAt": "2024-01-01T00:00:00Z",
          "updatedBy": { /* user object */ }
        }
      }
    },
    "total": 10
  }
}
```

### PUT /api/settings
Update multiple settings. **Requires authentication.**

**Request Body:**
```json
{
  "settings": [
    {
      "key": "string",
      "value": "any",
      "category": "string"
    }
  ]
}
```

### GET /api/settings/:category
Get settings for specific category. **Requires authentication.**

### DELETE /api/settings/:category
Delete all settings in category. **Requires ADMIN role.**

---

## Dashboard APIs

### GET /api/dashboard/stats
Get dashboard statistics. **Requires authentication.**

**Response:**
```json
{
  "success": true,
  "data": {
    "content": {
      "articles": {
        "total": 50,
        "published": 30,
        "draft": 20,
        "thisWeek": 5
      },
      "pages": {
        "total": 100,
        "published": 80,
        "draft": 20,
        "thisWeek": 10
      }
    },
    "analytics": {
      "totalViews": 10000,
      "todayViews": 500,
      "averageDaily": 333
    },
    "users": {
      "total": 5,
      "active": 3
    },
    "recentActivity": [ /* activity entries */ ]
  }
}
```

---

## Activity APIs

### GET /api/activity
Get activity logs. **Requires authentication.**

**Query Parameters:**
- `page` (number, default: 1)
- `limit` (number, default: 10)
- `userId` (uuid) - Filter by user
- `action` (string) - Filter by action
- `entityType` (string) - Filter by entity type

### GET /api/activity/recent
Get formatted recent activity for dashboard. **Requires authentication.**

**Query Parameters:**
- `limit` (number, default: 10)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "description": "Admin created article: New Article",
      "action": "CREATE_ARTICLE",
      "user": "Admin",
      "timestamp": "2024-01-01T00:00:00Z",
      "metadata": {}
    }
  ]
}
```

---

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "code": 400
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (not logged in)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `409` - Conflict (e.g., duplicate slug)
- `429` - Too Many Requests (rate limited)
- `500` - Internal Server Error

---

## Rate Limiting

Login endpoint has rate limiting:
- Maximum 3 failed attempts per IP address
- 15-minute cooldown period after reaching limit
- Successful login resets the counter

---

## Pagination

Most list endpoints support pagination with these standard parameters:
- `page` - Page number (starts at 1)
- `limit` - Items per page (max 100)

Response includes pagination metadata:
```json
{
  "meta": {
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "totalPages": 10,
      "hasMore": true
    }
  }
}
```

---

## Webhook Integration

Article generation sends webhook to configured URL with payload:
```json
{
  "articleId": "uuid",
  "topic": "string",
  "timestamp": "2024-01-01T00:00:00Z",
  "source": "admin_dashboard",
  "userId": "uuid"
}
```

Webhook URL is configured in environment variable: `WEBHOOK_URL`

---

## Testing the APIs

Use the following curl commands to test the APIs:

```bash
# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"Niblah","password":"Jukovic91!"}'

# Get dashboard stats (requires auth cookie)
curl http://localhost:3000/api/dashboard/stats \
  -H "Cookie: auth-token=YOUR_TOKEN"

# Track page view (public)
curl -X POST http://localhost:3000/api/analytics/track \
  -H "Content-Type: application/json" \
  -d '{"pagePath":"/marketing/amsterdam"}'

# Create article (requires auth)
curl -X POST http://localhost:3000/api/articles/generate \
  -H "Content-Type: application/json" \
  -H "Cookie: auth-token=YOUR_TOKEN" \
  -d '{"topic":"Digital Marketing Trends 2024"}'
```