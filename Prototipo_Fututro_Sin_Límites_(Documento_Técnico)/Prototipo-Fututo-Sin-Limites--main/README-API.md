# Explora Tu Futuro - API Documentation

## Overview
This is the backend API for the Explora Tu Futuro educational platform. It provides endpoints for managing users, courses, progress, and opportunities.

## Database Schema

The platform uses the following main entities:

### Users
- Stores student profile information
- Tracks authentication and personal details

### Courses
- Contains course metadata and structure
- Organized by area: Programación, Diseño, Arquitectura
- Three difficulty levels: Principiante, Intermedio, Avanzado

### Lessons
- Individual lessons within courses
- Types: video, practice, project
- Tracks completion status and time spent

### Progress Tracking
- CourseEnrollment: Student's enrollment in courses
- LessonProgress: Completion status of individual lessons
- StudentAchievement: Unlocked achievements

### Opportunities
- Universities: Educational institutions with programs
- JobOpportunities: Current job postings

## API Endpoints

### Authentication
- `POST /api/auth` - Login and signup

### Courses
- `GET /api/courses` - Get all courses (with filters)
- `POST /api/courses` - Create new course (admin only)

### Progress
- `GET /api/progress?userId={id}` - Get student progress
- `POST /api/progress` - Update lesson progress

### Opportunities
- `GET /api/opportunities?type=universities` - Get universities
- `GET /api/opportunities?type=jobs` - Get job listings

## Integration Notes

### For Production Deployment:

1. **Database**: Connect to PostgreSQL, MongoDB, or Supabase
2. **Authentication**: Implement JWT or OAuth 2.0
3. **File Storage**: Use Cloud Storage (AWS S3, Cloudinary) for videos and images
4. **Email Service**: Integrate SendGrid or similar for notifications
5. **Payment**: Add Stripe for potential premium features

### Environment Variables Required:
- DATABASE_URL
- JWT_SECRET
- API_KEY
- STORAGE_BUCKET
- EMAIL_SERVICE_KEY

## Development

Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Test API endpoints:
\`\`\`bash
curl http://localhost:3000/api/courses
\`\`\`

## Deployment

The application is ready for deployment to Vercel, AWS, or any Node.js hosting provider.
