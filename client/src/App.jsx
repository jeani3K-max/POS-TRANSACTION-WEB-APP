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
   <div
     style={{
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
       color: "#fff",
       padding: "25px 30px",
       borderRadius: "15px",
       marginBottom: "30px",
     }}>
     <div>
        <h1
         style={{
           margin: 0,
           fontSize: "32px",
          }} >
         🛒 POS Transaction System
       </h1>

       <p
         style={{
           marginTop: "8px",
           opacity: 0.9,
         }} >
         Manage sales efficiently and track business performance.
       </p>
     

        <button
         onClick={handleLogout}
         style={{
           background: "#ef4444",
           color: "#fff",
           border: "none",
           padding: "12px 20px",
           borderRadius: "8px",
           cursor: "pointer",
           fontWeight: "bold",
           transition: "0.3s",
          }}>
         Logout
        </button>
   

       <DashboardCards
         totalTransactions={totalTransactions}
         totalRevenue={totalRevenue}
         totalQuantity={totalQuantity}
       />

     
       <SearchBar
          searchTerm={searchTerm}
         setSearchTerm={setSearchTerm}
       />

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
    

        <hr />

       <h2>Transactions</h2>

       <TransactionTable
         transactions={filteredTransactions}
         handleEdit={handleEdit}
         handleDelete={handleDelete}
       />

       <hr />

       <p
          style={{
            textAlign: "center",
           color: "#6867",
           marginTop: "30px",
         }}>
         POS Transcation Web App © 2026
       </p>
     </div>
   </div> 
   
  );
}


export default App;