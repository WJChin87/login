# Basic Login System

A simple Node.js login system using sessions and MongoDB.

## What's Included
- Login page (`views/auth/login.ejs`)
- Register page (`views/auth/register.ejs`) 
- User model (`models/User.js`)
- Main app file (`app.js`)
- Configuration (`config-sample.js`)

## How to Use

1. Rename `config-sample.js` to `config.js`
2. Edit `config.js` with your MongoDB details:
```js
module.exports = {
  dbUrl: 'mongodb://localhost:27017/login_app',
  sessionSecret: 'your-secret-key-here'
}
```
3. Install needed packages:
```bash
npm install express mongoose ejs express-session bcryptjs
```
4. Start the server:
```bash
npm run dev
```
5. Visit in your browser:
```bash
http://localhost:3000/login
http://localhost:3000/register
```

## File Structure
```bash
login/
├── views/           # Login/register pages
│   └── auth/
│       ├── login.ejs
│       └── register.ejs
├── models/          # Database stuff
│   └── User.js
├── public/          # CSS/JS
│   └── styles.css
├── app.js           # Main server file
└── config-sample.js # Database config
```

## How It Works
1. Users register with email/password
2. Passwords get hashed with bcrypt
3. Logins create server sessions
4. Sessions let users stay logged in

That's it! Just Node.js, Express, and MongoDB - no extra frameworks.
