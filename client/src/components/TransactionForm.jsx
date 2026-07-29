export default function TransactionForm({
  product,
  setProduct,
  quantity,
  setQuantity,
  unit,
  setUnit,
  price,
  setPrice,
  editingId,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "15px",
          marginBottom: "30px",
          background: "rgba(255, 153, 153, 0.6)",
          padding: "20px",
          borderRadius: "10px",
        }}>
      <input
        type="text"
        placeholder="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{ width: "100%",
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "16px",
          boxSizing: "border-box",}}
      />
      <select
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}>
       <option value="Piece">Piece</option>
       <option value="Pack">Pack</option>
       <option value="Box">Box</option>
       <option value="Carton">Carton</option>
       <option value="Bottle">Bottle</option>
       <option value="Strip">Strip</option>
       <option value="Sachet">Sachet</option>
       <option value="Tube">Tube</option>
       <option value="Roll">Roll</option>
       <option value="Dozen">Dozen</option>
     </select>

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ width: "100%",
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "16px",
          boxSizing: "border-box",}}
      />

      <button type="submit"
      style={{
            width: "100%",
            padding: "14px",
            backgroundColor: editingId ? "#ffc107" : "#0d6efd",
            color: editingId ? "#000" : "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}>
        {editingId ? "Update Transaction" : "Save Transaction"}
      </button>
    </form>
  );
}