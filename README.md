# 🔐 Node.js Authentication API

A production-ready session authentication system built with Express and MongoDB, following modern backend development practices.

## Tech Stack
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-5+-47A248?logo=mongodb&logoColor=white)

## Features
- **Session-based authentication** with server-side storage
- **Password hashing** using bcrypt
- **MVC architecture** with clean separation of concerns
- **Environment configuration** with dotenv
- **Error handling middleware** for robust API responses

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas or local instance
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/auth-api.git
cd auth-api

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
Configure your .env file:

env
Copy
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/auth_db?retryWrites=true&w=majority
SESSION_SECRET=your_secure_session_secret
PORT=3000
Running the Server
bash
Copy
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
Project Structure
Copy
src/
├── config/         # Database and environment setup
├── controllers/    # Business logic
├── models/         # MongoDB schemas
├── routes/         # API endpoints
├── middlewares/    # Authentication middleware
├── utils/          # Helper functions
├── app.js          # Express application
└── server.js       # Server initialization
API Documentation
Authentication Routes
Endpoint	Method	Description
/api/register	POST	Register new user
/api/login	POST	Authenticate existing user
/api/logout	GET	Terminate user session
/api/me	GET	Get current user data (protected)
Example Request
bash
Copy
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"securePassword123"}'
Security Considerations
All passwords are hashed with bcrypt before storage

Sessions are stored server-side

Sensitive configuration is environment-based

CSRF protection implemented for forms

Roadmap
Add password reset functionality

Implement rate limiting

Write integration tests

Add Swagger documentation
