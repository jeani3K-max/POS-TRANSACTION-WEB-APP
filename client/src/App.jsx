import { useEffect, useState } from "react";
import DashboardCards from "./components/DashboardCards";
import SearchBar from "./components/SearchBar";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";
import Login from "./components/Login";
import Register from "./components/Register";

import {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "./services/transactionService";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Piece");
  const [price, setPrice] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState("login");

 const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const [user, setUser] = useState(null);

  // Fetch all transactions
 const fetchTransactions = async () => {
  try {
    const data = await getTransactions();
    setTransactions(data);
  } catch (error) {
    console.error(error);
  }
 };

 useEffect(() => {
    fetchTransactions();

   const savedUser = localStorage.getItem("user");

   if (savedUser) {
     setUser(JSON.parse(savedUser));
   }
 }, []);

  // Save transaction
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!product || quantity <= 0 || !unit || price <= 0) {
    alert("Please enter valid product, quantity and price.");
    return;
  }

  const newTransaction = {
    product,
    quantity: Number(quantity),
    unit,
    price: Number(price),
  };

  try {
    let data;

    if (editingId) {
      data = await updateTransaction(editingId, newTransaction);
    } else {
      data = await createTransaction(newTransaction);
    }

    alert(data.message);

    setProduct("");
    setQuantity("");
    setUnit("Piece");
    setPrice("");
    setEditingId(null);

    fetchTransactions();
  } catch (error) {
    console.error(error);
  }
};

  const handleDelete = async (id) => {
   const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmDelete) return;

   try {
    const response = await fetch(
      `http://localhost:5000/transactions/${id}`,
      {
        method: "DELETE",
      }
     );

     const data = await response.json();

     alert(data.message);

     fetchTransactions();
    } catch (error) {
     console.error(error);
    }
  };

  const handleEdit = (transaction) => {
    setEditingId(transaction.id);
    setProduct(transaction.product);
    setQuantity(transaction.quantity);
    setUnit(transaction.unit);
    setPrice(transaction.price);
  };
 

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Search:", searchTerm);
  console.log("Filtered:", filteredTransactions);

  const totalTransactions = transactions.length;

 const totalRevenue = transactions.reduce(
   (sum, transaction) => sum + Number(transaction.total),
   0
 );

 const totalQuantity = transactions.reduce(
   (sum, transaction) => sum + Number(transaction.quantity),
    0
 );

 const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsAuthenticated(false);
    setPage("login");
  };
if (!isAuthenticated) {
  if (page === "register") {
    return (
      <Register
        onLoginClick={() => setPage("login")}
      />
    );
  }

  return (
    <Login
      onRegisterClick={() => setPage("register")}
      onLoginSuccess={() => setIsAuthenticated(true)}
    />
  );
}

 
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-5">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
           <p className="text-blue-100 text-lg">
              Welcome back 👋
            </p>

           <h1 className="text-4xl font-bold text-white mt-1">
              {user?.name || "User"}
           </h1>

           <p className="text-blue-100 mt-2">
             Manage sales efficiently and track business performance.
           </p>
         </div>

          <div className="text-center md:text-right">

            <p className="text-white mb-3">
             Logged in as
              <br />
             <span className="font-semibold">
               {user?.email}
              </span>
           </p>

           <button
             onClick={handleLogout}
               className="bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
              >
             Logout
           </button>
         </div>
        </header>

        {/* Dashboard Cards */}
       <DashboardCards
          totalTransactions={totalTransactions}
          totalRevenue={totalRevenue}
          totalQuantity={totalQuantity}
       />

        {/* Search */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
       />

       {/* Transaction Form */}
        <TransactionForm
          product={product}
          setProduct={setProduct}
          quantity={quantity}
          setQuantity={setQuantity}
          unit={unit}
          setUnit={setUnit}
          price={price}
          setPrice={setPrice}
          editingId={editingId}
          handleSubmit={handleSubmit}
        />

       {/* Transactions */}
       <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold text-slate-700 mb-6">
            📋 Recent Transactions
         </h2>

         <TransactionTable
           transactions={filteredTransactions}
           handleEdit={handleEdit}
           handleDelete={handleDelete}
         />
       </div>

        {/* Footer */}
        <footer className="text-center text-slate-500 py-6">
          Developed by <span className="font-semibold">Jeffrey Franklyn Amayanvbo</span>
         <br />
          POS Transaction Management System © 2026
        </footer>
     </div>
    </div>
 );
}


export default App;