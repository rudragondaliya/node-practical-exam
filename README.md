---

```markdown
# 🧩 Node Practical Exam

A complete **Node.js + Express + MongoDB** web application built using **EJS templating**, **JWT Authentication**, and **Multer for file uploads**.  
This project demonstrates core backend development concepts like routing, authentication, CRUD operations, and middleware in a modular structure.

---

## 🚀 Live Preview

🔗 **Live Demo:** [https://node-practical-exam.onrender.com](https://node-practical-exam.onrender.com)

---

## 🛠️ Tech Stack

| Category | Technologies Used |
|-----------|-------------------|
| **Backend Framework** | Node.js, Express.js |
| **Template Engine** | EJS |
| **Database** | MongoDB (via Mongoose) |
| **Authentication** | JSON Web Token (JWT) |
| **File Handling** | Multer |
| **Environment Management** | dotenv |
| **Cookies** | cookie-parser |
| **Body Parsing** | body-parser |

---

## 📂 Project Structure

```

node-practical-exam/
│
├── configs/
│   └── database.js          # MongoDB connection setup
│
├── controllers/
│   ├── auth.controller.js   # Authentication logic
│   ├── product.controller.js# CRUD logic for products
│   └── user.controller.js   # User management logic
│
├── models/
│   ├── product.model.js
│   └── user.model.js
│
├── routers/
│   ├── index.js             # Root routes
│   ├── product.route.js
│   └── user.route.js
│
├── views/
│   ├── pages/               # EJS pages
│   ├── partials/            # Header, Navbar, Footer
│   └── index.ejs
│
├── public/                  # Static assets (CSS, JS, images)
│
├── .env                     # Environment variables
├── server.js                # Main entry point
└── package.json

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/node-practical-exam.git
cd node-practical-exam
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root and add:

```
PORT=9001
MONGODB_URL=your_mongodb_connection_string
PRIVATE_KEY=your_jwt_secret
```

### 4️⃣ Run the Server

```bash
npm start
```

or

```bash
node server.js
```

Then visit 👉 **[http://localhost:9001](http://localhost:9001)**

---

## 🧑‍💻 Features

✅ User Registration & Login (with password hashing)
✅ JWT-based Authentication & Protected Routes
✅ Product CRUD Operations (Create, Read, Update, Delete)
✅ File Uploads using Multer
✅ Cookie-based Session Handling
✅ Responsive EJS Frontend with Bootstrap
✅ Error Handling & Logging

---

## 📸 Screenshots

| Login Page                                        | Dashboard                                                 |
| ------------------------------------------------- | --------------------------------------------------------- |
| ![Login Screenshot](public/screenshots/login.png) | ![Dashboard Screenshot](public/screenshots/dashboard.png) |

*(Add your own screenshots inside `public/screenshots/` and update links accordingly.)*

---

## 📜 License

This project is open-source under the **MIT License**.

---

## ✨ Author

**Rudra Gondaliya**
🔗 [Portfolio](https://my-portfolio-opal-beta-59.vercel.app/)
📧 [rudra.gondaliya@example.com](mailto:rudra.gondaliya@example.com)
📍 India

---

### ⭐ If you found this helpful, consider giving it a star on GitHub!

```

---

Would you like me to **generate this as a `README.md` file** and make it ready for upload to your repo (including replacing placeholders like your GitHub username automatically)?
```
