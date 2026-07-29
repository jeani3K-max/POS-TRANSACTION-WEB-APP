export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
       className="border-2 border-blue-500 rounded-lg p-3 w-full"
        type="text"
        placeholder="Search by product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        
      />
    </div>
  );
}