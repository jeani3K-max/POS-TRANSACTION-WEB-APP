POS Transaction Web App

Overview

The POS Transaction Web App is a full-stack web application built to help Point of Sale (POS) agents record and manage daily sales transactions digitally. It replaces manual record keeping with an easy-to-use interface for creating, updating, viewing, and deleting transactions while automatically calculating total sales.

⸻

Features

* User Registration
* User Login Authentication
* Add New Transaction
* View All Transactions
* Edit Existing Transactions
* Delete Transactions
* Search Transactions
* Automatic Sales Total Calculation
* Responsive Dashboard

⸻

Technologies Used

Frontend

* React
* Vite
* JavaScript
* CSS

Backend

* Node.js
* Express.js

Database

* SQLite3

Other Packages

* CORS
* Nodemon

⸻

Folder Structure

POS-TRANSACTION-WEB-APP
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── database/
│   ├── index.js
│   └── package.json
│
└── README.md

⸻

Installation

Clone the repository

git clone https://github.com/jeani3K-max/POS-TRANSACTION-WEB-APP.git

Install frontend dependencies

cd client
npm install

Start the frontend

npm run dev

Install backend dependencies

cd ../server
npm install

Start the backend

npm run dev

⸻

API Endpoints

Authentication

* POST /register
* POST /login

Transactions

* GET /transactions
* POST /transactions
* PUT /transactions/:id
* DELETE /transactions/:id

⸻

Screenshots

Add screenshots of:

* Login Page
* Dashboard
* Add Transaction Form
* Transaction Table

⸻

Future Improvements

* Export transactions to PDF
* Export transactions to Excel
* Monthly sales reports
* Charts and analytics
* User roles and permissions

⸻

Author

Jeffrey Amayanvbo

GitHub:
https://github.com/jeani3K-max
