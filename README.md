# 🛒 POS Transaction Web App

A full-stack Point of Sale (POS) Transaction Management System built with **React**, **Express.js**, **SQLite**, and **JWT Authentication**. The application allows users to securely register, log in, and manage POS transactions through an intuitive dashboard.

---

## 🚀 Live Demo

**Frontend (Vercel):**
https://YOUR-VERCEL-URL.vercel.app

**Backend (Render):**
https://pos-transaction-web-app.onrender.com

---

## 📌 Features

### Authentication

- User Registration
- Secure User Login
- JWT Authentication
- Protected Dashboard
- Logout Functionality

### Transaction Management

- Add new transactions
- View all transactions
- Edit existing transactions
- Delete transactions
- Search transactions
- Automatic total amount calculation

### Dashboard

- Welcome message with logged-in user's name
- Total transactions summary
- Responsive layout
- Modern UI with Tailwind CSS
- Lucide React icons

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- JavaScript
- Fetch API
- Lucide React

### Backend

- Node.js
- Express.js
- SQLite3
- JWT (JSON Web Token)
- bcrypt

### Deployment

- Frontend: Vercel
- Backend: Render

---

## 📂 Project Structure

```
POS-TRANSACTION-WEB-APP
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── routes/
│   ├── database/
│   ├── db.js
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/jeani3K-max/POS-TRANSACTION-WEB-APP.git
```

Move into the project folder

```bash
cd POS-TRANSACTION-WEB-APP
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Server runs on

```
http://localhost:5000
```

---

## Frontend Setup

Open another terminal

```bash
cd client
npm install
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## Environment Variables

### Client (.env)

```env
VITE_API_URL=https://pos-transaction-web-app.onrender.com
```

### Server (.env)

```env
JWT_SECRET=your_secret_key
PORT=5000
```

---

## API Endpoints

### Authentication

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /auth/register | Register new user |
| POST   | /auth/login    | Login user        |

### Transactions

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| GET    | /transactions     | Get all transactions |
| POST   | /transactions     | Create transaction   |
| PUT    | /transactions/:id | Update transaction   |
| DELETE | /transactions/:id | Delete transaction   |

---

## Screenshots

### Login Page

_Add screenshot here_

### Dashboard

_Add screenshot here_

### Transactions

_Add screenshot here_

---

## Future Improvements

- Transaction categories
- Sales analytics
- Export to Excel/PDF
- Customer management
- Inventory management
- Dark mode
- Role-based authentication
- Pagination
- Email verification

---

## Challenges Faced

- SQLite database configuration
- Backend deployment on Render
- Connecting frontend to deployed backend
- JWT authentication setup
- Environment variable configuration
- CRUD API integration

---

## Lessons Learned

Through this project I learned how to:

- Build a full-stack web application
- Create REST APIs using Express.js
- Connect React to a backend API
- Implement JWT authentication
- Hash passwords using bcrypt
- Manage SQLite databases
- Deploy applications using Render and Vercel
- Handle environment variables
- Perform CRUD operations

---

## Author

**Jeffrey Amayanvbo**

GitHub:
https://github.com/jeani3K-max

---

## Repository

https://github.com/jeani3K-max/POS-TRANSACTION-WEB-APP

---

## License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
