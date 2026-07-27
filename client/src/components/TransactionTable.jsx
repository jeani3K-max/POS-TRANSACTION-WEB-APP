export default function TransactionTable({
  transactions,
  handleEdit,
  handleDelete,
}) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >
      <thead
        style={{
          backgroundColor: "#0d6efd",
          color: "white",
        }}
      >
        <tr>
          <th style={{ padding: "12px" }}>Product</th>
          <th style={{ padding: "12px" }}>Quantity</th>
          <th style={{ padding: "12px" }}>Price</th>
          <th style={{ padding: "12px" }}>Total</th>
          <th style={{ padding: "12px" }}>Date</th>
          <th style={{ padding: "12px" }}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {transactions.length === 0 ? (
          <tr>
            <td
              colSpan="6"
              style={{
                textAlign: "center",
                padding: "20px",
              }}
            >
              No transactions found.
            </td>
          </tr>
        ) : (
          transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td style={cellStyle}>{transaction.product}</td>

              <td style={cellStyle}>{transaction.quantity}</td>

              <td style={cellStyle}>₦{transaction.price}</td>

              <td style={cellStyle}>₦{transaction.total}</td>

             <td style={cellStyle}>
                {transaction.createdAt
                ? new Date(transaction.createdAt.replace(" ", "T") + "Z")
                .toLocaleString("en-NG", {timeZone: "Africa/Lagos",})
                : "N/A"}
              </td>

              <td style={cellStyle}>
                <button
                  onClick={() => handleEdit(transaction)}
                  style={editButton}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(transaction.id)}
                  style={deleteButton}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

const cellStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
  textAlign: "center",
};

const editButton = {
  backgroundColor: "#ffc107",
  color: "#000",
  border: "none",
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "8px",
};

const deleteButton = {
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer",
};