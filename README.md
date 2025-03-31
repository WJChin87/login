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
