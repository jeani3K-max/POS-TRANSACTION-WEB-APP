function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <label
        htmlFor="search"
        className="block text-lg font-semibold text-slate-700 mb-3"
      >
        🔍 Search Transactions
      </label>

      <input
        id="search"
        type="text"
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />
    </div>
  );
}

export default SearchBar;