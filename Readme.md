# Job Analytics — Backend

REST API backend for the Job Analytics application. Built with Node.js, Express.js, and MongoDB with JWT-based authentication.

**Live API:** [https://jobtrackerbackend-6gxo.onrender.com](https://jobtrackerbackend-6gxo.onrender.com)  
**Frontend Repo:** [https://github.com/12345-dd/jobTrackerFrontend](https://github.com/12345-dd/jobTrackerFrontend)  
**Live Website:** [https://jobanalytic.netlify.app](https://jobanalytic.netlify.app)

---

## Features

- **JWT Authentication** — Secure token-based auth
- **Protected API Routes** — Middleware to guard private endpoints
- **MongoDB Integration** — Persistent data storage with Mongoose
- **Job CRUD Operations** — Create, read, update, delete job applications
- **Password Hashing** — Bcrypt for secure password storage

---

## Getting Started (Local Setup)

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/12345-dd/jobTrackerBackend.git
cd jobTrackerBackend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create `.env` File
```env
PORT=4000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Run the Server
```bash
node app.js
```

> Server runs on `http://localhost:4000`

---


## Deployment

- Backend is deployed on **Render**
- Live API URL: [https://jobtrackerbackend-6gxo.onrender.com](https://jobtrackerbackend-6gxo.onrender.com)
- UptimeRobot is configured to keep the server always active 

---

