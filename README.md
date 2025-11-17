# 🔐 Auth-System — Login, Register & Bcrypt

A simple and secure authentication system built with **Node.js**, **Express**, and **MongoDB**, using **bcrypt** for password hashing. This project lets users register, log in, submit contact messages (optional), and update passwords — ideal for beginners learning authentication and a small contact-form backend.

---

## 🔧 Built With

* ⚡ **Node.js + Express** — backend server & routing
* 🧠 **JavaScript (ES Modules)** — modern syntax & clean structure
* 🗄️ **MongoDB + Mongoose** — database and schema handling
* 🔐 **bcrypt** — secure password hashing
* 🌿 **dotenv** — environment variable management
* 🔑 **jsonwebtoken** — JWT-based authentication

---

## 🌟 Features

* ✅ User registration with hashed passwords (bcrypt)
* ✅ Secure login with JWT token generation
* ✅ Password update route with validation
* ✅ Token-based authentication middleware for protected routes
* ✅ Optional: Contact form submission tied to authenticated users
* ✅ Admin routes to list users and all contact submissions
* ✅ Organized project structure for scalability
* ✅ Input validation and error handling

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/sahillll0/Contact_From_API
cd contact-form-backend-api

# Install dependencies
npm install

# Create a .env file (see example below)
# Start MongoDB service
npm start
```

> Recommended: run with `nodemon` during development.

---

## ⚙️ Environment Variables

Create a `.env` file in the project root and add:

```env
MONGO_DB_URL=your_mongodb_connection_string
DB_NAME=your_db_name
PORT=8001
JWT_SECRET=your_jwt_secret
```

---

## 📚 API Endpoints

### Public Routes

| Method | Endpoint    | Description                               |
| ------ | ----------- | ----------------------------------------- |
| GET    | `/`         | Health check                              |
| POST   | `/ragister` | Register new user (name, email, password) |
| POST   | `/login`    | Login user (returns JWT token)            |

### Protected Routes (Require `Authorization: Bearer <token>`)

| Method | Endpoint        | Description                                    |
| ------ | --------------- | ---------------------------------------------- |
| POST   | `/contectForm`  | Submit contact message (authenticated users)   |
| PUT    | `/editPassword` | Update user password (email, oldPass, newPass) |
| DELETE | `/delete`       | Delete user account                            |

### Admin Routes

| Method | Endpoint     | Description                              |
| ------ | ------------ | ---------------------------------------- |
| GET    | `/all/admin` | Get all contact submissions (admin only) |
| GET    | `/users`     | Get all registered users (admin only)    |

---

## 🔁 Request Examples

**Register**

```json
POST /ragister
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Login**

```json
POST /login
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Submit Contact Form (Authenticated)**

```
POST /contectForm
Headers: Authorization: Bearer <your_jwt_token>
{
  "message": "Your message here"
}
```

**Update Password**

```json
PUT /editPassword
{
  "email": "john@example.com",
  "oldPass": "oldpassword",
  "newPass": "newpassword123"
}
```

---

## 🧱 Project Structure

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

---

## 🔐 Security Features

* Password hashing with **bcrypt** (never store plain-text passwords)
* JWT-based authentication for protected routes
* Middleware to verify tokens and protect endpoints
* Input validation and standardized error responses

---

## 🧪 Testing

Test the API with Postman, Insomnia, or Thunder Client (VS Code extension). Use the `/login` route to obtain a token and pass it in the `Authorization` header for protected routes.

---

## 💡 Notes & Tips

* Change `JWT_SECRET` to a long, unpredictable string in production.
* Use environment-specific DBs (development, staging, production).
* Add rate-limiting and CSRF protection if exposing to the public internet.

---

## 📄 License

ISC

---

🤷‍♂️ Author & Acknowledgements

Made with ❤️ by **sahillll0**

Thanks for checking out this project!

If you found it helpful, ⭐ star the repo — it really motivates me to build more cool stuff.

“Keep learning, keep building.” – Sahillll0
