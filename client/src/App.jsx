import { useEffect, useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  // Fetch all transactions
  const fetchTransactions = () => {
    fetch("http://localhost:5000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Save transaction
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product || quantity <= 0 || price <= 0) {
     alert("Please enter valid product, quantity and price.");
    return;}

    const newTransaction = {
      product,
      quantity: Number(quantity),
      price: Number(price),
    };

    try {
      const response = await fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      });

      const data = await response.json();

      alert(data.message);

      setProduct("");
      setQuantity("");
      setPrice("");

      fetchTransactions();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h1>POS Transaction Web App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Save Transaction</button>
      </form>

      <hr />

      <h2>Transactions</h2>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.product}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.price}</td>
              <td>{transaction.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;