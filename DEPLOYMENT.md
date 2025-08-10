# Deployment Guide - Admin Dashboard

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Deployment Options](#deployment-options)
4. [Production Checklist](#production-checklist)
5. [Monitoring & Maintenance](#monitoring--maintenance)
6. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Services
- Node.js 20.x or higher
- PostgreSQL 15+ or SQLite (for development)
- Redis 7+ for caching and job queues
- Domain name with SSL certificate

### Required Accounts
- GitHub account (for CI/CD)
- Sentry account (for error tracking)
- Cloud provider account (Vercel, AWS, or Docker host)

## Environment Setup

### 1. Clone Repository
```bash
git clone https://github.com/your-org/admin-dashboard.git
cd admin-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
```bash
# Copy example file
cp .env.production.example .env.production

# Edit with your values
nano .env.production
```

### 4. Setup Database
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Seed initial data (optional)
npx prisma db seed
```

## Deployment Options

### Option 1: Vercel (Recommended)

#### Install Vercel CLI
```bash
npm i -g vercel
```

#### Deploy
```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### Environment Variables
Set these in Vercel dashboard:
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `JWT_SECRET` - Random 32+ character string
- `SENTRY_DSN` - Sentry project DSN

### Option 2: Docker

#### Build Image
```bash
docker build -t admin-dashboard:latest .
```

#### Run with Docker Compose
```bash
# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f app
```

#### Deploy to Docker Registry
```bash
# Tag image
docker tag admin-dashboard:latest your-registry/admin-dashboard:latest

# Push to registry
docker push your-registry/admin-dashboard:latest
```

### Option 3: Traditional VPS

#### Setup Server
```bash
# SSH into server
ssh user@your-server.com

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
npm install -g pm2

# Install Nginx
sudo apt-get install nginx
```

#### Deploy Application
```bash
# Clone repository
git clone https://github.com/your-org/admin-dashboard.git
cd admin-dashboard

# Install dependencies
npm ci --production

# Build application
npm run build

# Start with PM2
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save
pm2 startup
```

#### Configure Nginx
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### Setup SSL with Let's Encrypt
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Production Checklist

### Security
- [ ] All environment variables are set
- [ ] JWT secrets are strong (32+ characters)
- [ ] Database has SSL enabled
- [ ] Redis has password authentication
- [ ] CORS is properly configured
- [ ] Rate limiting is enabled
- [ ] CSRF protection is active
- [ ] Input validation is working
- [ ] SQL injection protection verified
- [ ] XSS protection verified

### Performance
- [ ] Database indexes are created
- [ ] Redis caching is enabled
- [ ] Static assets are compressed
- [ ] Images are optimized
- [ ] CDN is configured (optional)
- [ ] Database connection pooling enabled

### Monitoring
- [ ] Sentry error tracking configured
- [ ] Performance monitoring active
- [ ] Health check endpoint working
- [ ] Logs are being collected
- [ ] Alerts are configured
- [ ] Backup strategy implemented

### Testing
- [ ] All tests pass
- [ ] E2E tests run successfully
- [ ] Security scan completed
- [ ] Load testing performed
- [ ] Rollback procedure tested

## Monitoring & Maintenance

### Health Checks
```bash
# Check application health
curl https://your-domain.com/api/health

# Check database connection
curl https://your-domain.com/api/health/db

# Check Redis connection
curl https://your-domain.com/api/health/redis
```

### Logs
```bash
# View application logs (PM2)
pm2 logs app

# View application logs (Docker)
docker logs admin-dashboard

# View Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### Database Maintenance
```bash
# Backup database
pg_dump -h localhost -U postgres admin_dashboard > backup.sql

# Restore database
psql -h localhost -U postgres admin_dashboard < backup.sql

# Run migrations
npx prisma migrate deploy

# Check migration status
npx prisma migrate status
```

### Performance Monitoring
```bash
# Check memory usage
pm2 monit

# Check CPU usage
htop

# Check disk usage
df -h

# Check database performance
npx prisma studio
```

## Troubleshooting

### Common Issues

#### Application Won't Start
```bash
# Check logs
pm2 logs app --lines 100

# Check environment variables
pm2 env 0

# Restart application
pm2 restart app
```

#### Database Connection Failed
```bash
# Test connection
npx prisma db pull

# Check connection string
echo $DATABASE_URL

# Reset database
npx prisma migrate reset --force
```

#### Redis Connection Failed
```bash
# Check Redis status
redis-cli ping

# Check Redis logs
docker logs redis

# Restart Redis
docker restart redis
```

#### High Memory Usage
```bash
# Check memory leaks
pm2 restart app --max-memory-restart 1G

# Analyze heap dump
node --expose-gc --inspect app.js
```

### Emergency Procedures

#### Rollback Deployment
```bash
# Revert to previous version (Vercel)
vercel rollback

# Revert to previous version (Docker)
docker pull your-registry/admin-dashboard:previous-tag
docker stop admin-dashboard
docker run -d --name admin-dashboard your-registry/admin-dashboard:previous-tag

# Revert to previous version (Git)
git revert HEAD
npm run build
pm2 restart app
```

#### Database Recovery
```bash
# Stop application
pm2 stop app

# Restore from backup
psql -h localhost -U postgres -c "DROP DATABASE admin_dashboard;"
psql -h localhost -U postgres -c "CREATE DATABASE admin_dashboard;"
psql -h localhost -U postgres admin_dashboard < backup.sql

# Run migrations
npx prisma migrate deploy

# Start application
pm2 start app
```

## Scaling Considerations

### Horizontal Scaling
- Use load balancer (Nginx, HAProxy)
- Configure session sharing with Redis
- Use shared file storage (S3, NFS)
- Implement database read replicas

### Vertical Scaling
- Increase server resources (CPU, RAM)
- Optimize database queries
- Implement connection pooling
- Use database indexes effectively

### Caching Strategy
- Page caching with CDN
- API response caching with Redis
- Database query caching
- Static asset caching

## Security Updates

### Regular Updates
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies
npm update

# Update Prisma
npm update @prisma/client prisma

# Regenerate Prisma client
npx prisma generate
```

### Security Monitoring
- Enable GitHub security alerts
- Use Snyk for vulnerability scanning
- Regular penetration testing
- Monitor suspicious activities

## Support

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Redis Documentation](https://redis.io/documentation)

### Contact
- Technical Support: tech@example.com
- Security Issues: security@example.com
- Bug Reports: https://github.com/your-org/admin-dashboard/issues

## License
This project is proprietary and confidential.

---

**Last Updated**: December 2024
**Version**: 1.0.0