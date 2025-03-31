Node.js Authentication API 🔐
A clean session-based authentication system built with Node.js, Express, and MongoDB. My implementation focuses on core backend functionality with proper security practices.

Tech Stack
Runtime: Node.js 18+

Framework: Express 4.x

Database: MongoDB (Mongoose ODM)

Security: bcrypt hashing, express-session

Template Engine: EJS (for basic views)

Features
RESTful authentication endpoints

Session management with server-side storage

Password hashing using bcrypt

MVC architecture pattern

Environment configuration with dotenv

Installation
bash
Copy
# Clone repository
git clone https://github.com/your-repo/login-api.git && cd login-api

# Install dependencies
npm install

# Configure environment (use your MongoDB URI)
cp .env.example .env

# Start development server
npm run dev
Environment Variables
ini
Copy
MONGODB_URI=mongodb://localhost:27017/auth_db
SESSION_SECRET=complex_secret_key_here
PORT=3000
API Structure
Copy
src/
├── config/         # Environment and DB config
├── controllers/    # AuthController.js
├── models/         # User.model.js
├── routes/         # auth.routes.js
├── middlewares/    # auth.middleware.js
├── views/          # Simple EJS templates
└── app.js          # Express application setup
Key Endpoints
Method	Endpoint	Description
POST	/register	Create new user
POST	/login	Authenticate user
GET	/logout	Destroy session
GET	/profile	Protected user data
Best Practices Implemented
Proper error handling middleware

Async/await pattern

Environment configuration

Password hashing before storage

Separation of concerns (MVC)

Areas for Improvement
Add request validation

Implement rate limiting

Write unit tests

Add API documentation
