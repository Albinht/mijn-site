# Admin Dashboard Implementation Plan

## Overview
Implement a secure admin dashboard with authentication, rate limiting, and session management for the marketing website.

## Requirements
- **Username**: Niblah
- **Password**: Jukovic91!
- **Security**: Block access after 3 failed login attempts
- **Session**: Secure session management with JWT tokens
- **Dashboard**: Protected admin area with relevant controls

## Implementation Steps

### Phase 1: Authentication Setup
1. **Create Login API Route** (`/api/auth/login`)
   - Validate credentials
   - Implement rate limiting (3 attempts max)
   - Generate JWT token on success
   - Store failed attempts with IP tracking

2. **Create Logout API Route** (`/api/auth/logout`)
   - Clear session/token
   - Redirect to login

3. **Create Session Validation Middleware**
   - Verify JWT tokens
   - Check token expiration
   - Protect dashboard routes

### Phase 2: Login Page UI
1. **Create Login Page** (`/app/admin/login/page.js`)
   - Username/password form
   - Error handling for failed attempts
   - Show remaining attempts
   - Redirect on success

2. **Styling**
   - Professional, clean design with Tailwind CSS
   - Responsive layout
   - Loading states
   - Error messages

### Phase 3: Dashboard Implementation
1. **Create Dashboard Layout** (`/app/admin/dashboard/layout.js`)
   - Navigation menu
   - Logout button
   - User info display

2. **Dashboard Main Page** (`/app/admin/dashboard/page.js`)
   - Overview statistics
   - Quick actions
   - Recent activity

3. **Dashboard Features** (future expandable)
   - Content management
   - Analytics viewing
   - Settings management
   - User activity logs

### Phase 4: Security Implementation
1. **Rate Limiting**
   - Track failed attempts by IP
   - Implement cooldown period after 3 failures
   - Clear attempts after successful login

2. **Session Security**
   - JWT with expiration (e.g., 24 hours)
   - Secure HTTP-only cookies
   - CSRF protection

3. **Middleware Protection**
   - Protect all `/admin/dashboard/*` routes
   - Redirect unauthorized users to login

## Technical Architecture

### Dependencies Required
```json
{
  "jsonwebtoken": "^9.0.2",
  "bcryptjs": "^2.4.3",
  "jose": "^5.2.0"
}
```

### File Structure
```
src/app/
├── admin/
│   ├── login/
│   │   └── page.js          # Login page
│   ├── dashboard/
│   │   ├── layout.js        # Dashboard layout
│   │   └── page.js          # Dashboard main
│   └── middleware.js        # Auth middleware
├── api/
│   └── auth/
│       ├── login/
│       │   └── route.js     # Login endpoint
│       ├── logout/
│       │   └── route.js     # Logout endpoint
│       └── verify/
│           └── route.js     # Token verification
└── lib/
    ├── auth.js              # Auth utilities
    └── rate-limiter.js     # Rate limiting logic
```

### Environment Variables
```env
JWT_SECRET=<generated-secret>
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Security Considerations
1. **Password Storage**: Never store plaintext - use bcrypt hashing
2. **Rate Limiting**: Implement IP-based tracking with Redis or in-memory store
3. **Session Management**: Use secure, HTTP-only cookies for JWT storage
4. **HTTPS**: Ensure production uses HTTPS for all auth routes
5. **Input Validation**: Sanitize all inputs to prevent injection attacks

## Testing Checklist
- [ ] Login with correct credentials works
- [ ] Login with wrong credentials fails
- [ ] 3 failed attempts blocks further attempts
- [ ] JWT token is properly generated and validated
- [ ] Dashboard is inaccessible without authentication
- [ ] Logout clears session properly
- [ ] Token expiration works correctly
- [ ] Rate limiting resets after cooldown period

## Future Enhancements
- Two-factor authentication (2FA)
- Password reset functionality
- Activity logging and audit trail
- Role-based access control (RBAC)
- Multiple admin users support
- Email notifications for suspicious activity

## Implementation Order
1. Install dependencies
2. Create auth utilities and JWT handling
3. Implement login API with rate limiting
4. Create login page UI
5. Set up middleware for route protection
6. Build dashboard layout and pages
7. Add logout functionality
8. Test all security features
9. Deploy with proper environment variables

## Notes
- Use Next.js 15 middleware for route protection
- Implement client-side and server-side validation
- Consider using NextAuth.js for production scalability
- Add comprehensive error logging for security monitoring