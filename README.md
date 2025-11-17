# Contact Form Backend API

A RESTful API built with Node.js, Express, and MongoDB for managing user authentication and contact form submissions.

## Features

- **User Authentication**
  - User registration with password hashing (bcrypt)
  - Secure login with JWT token generation
  - Token-based authentication middleware
  - Password update functionality

- **Contact Form Management**
  - Authenticated users can submit contact messages
  - Messages are linked to user accounts
  - Admin endpoint to view all contact submissions

- **User Management**
  - Delete user accounts
  - View all registered users
  - Update user passwords

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT authentication
- **dotenv** - Environment variable management

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd contact-form-backend-api
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
```env
MONGO_DB_URL=mongodb://localhost:27017
DB_NAME=contactfrom
PORT=8001
JWT_SECRET=your_secret_key_here
```

4. Start MongoDB service

5. Run the application
```bash
npm start
```

## API Endpoints

### Public Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/ragister` | Register new user |
| POST | `/login` | User login (returns JWT token) |

### Protected Routes (Requires Authentication)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/contectForm` | Submit contact message |
| PUT | `/editPassword` | Update user password |
| DELETE | `/delete` | Delete user account |

### Admin Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/all/admin` | Get all contact submissions |
| GET | `/users` | Get all registered users |

## Request Examples

### Register User
```json
POST /ragister
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Login
```json
POST /login
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Submit Contact Form (Authenticated)
```json
POST /contectForm
Headers: Authorization: Bearer <your_jwt_token>
{
  "message": "Your message here"
}
```

### Update Password
```json
PUT /editPassword
{
  "email": "john@example.com",
  "oldPass": "oldpassword",
  "newPass": "newpassword123"
}
```

## Authentication

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

Get the token by logging in through the `/login` endpoint.

## Project Structure

```
├── controllers/
│   ├── contact.Controller.js
│   ├── delete.Controller.js
│   ├── editPass.controller.js
│   ├── login.Controller.js
│   ├── ragister.Controller.js
│   └── sendmess.Controller.js
├── db/
│   └── db.js
├── middleware/
│   └── auth.js
├── moduls/
│   ├── contactFrom.modul.js
│   └── user.Model.js
├── routes/
│   └── index.route.js
├── utils/
│   └── hashPassword.js
├── .env
├── app.js
├── server.js
└── package.json
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_DB_URL` | MongoDB connection URL |
| `DB_NAME` | Database name |
| `PORT` | Server port (default: 8001) |
| `JWT_SECRET` | Secret key for JWT signing |

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes with middleware
- Input validation
- Error handling

## License

ISC

## Author

Your Name
