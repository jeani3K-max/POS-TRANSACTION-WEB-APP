export default function DashboardCards({
  totalTransactions,
  totalRevenue,
  totalQuantity,
}) {
  const cardStyle = {
    flex: 1,
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      <div style={cardStyle}>
        <h3>Total Transactions</h3>
        <h2>{totalTransactions}</h2>
      </div>

      <div style={cardStyle}>
        <h3>Total Revenue</h3>
        <h2>${totalRevenue.toFixed(2)}</h2>
      </div>

      <div style={cardStyle}>
        <h3>Total Quantity</h3>
        <h2>{totalQuantity}</h2>
      </div>
    </div>
  );
}