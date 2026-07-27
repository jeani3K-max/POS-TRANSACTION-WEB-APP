export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      />
    </div>
  );
}