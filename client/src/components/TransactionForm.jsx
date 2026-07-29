function TransactionForm({
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
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-slate-700 mb-6">
        {editingId ? "✏️ Edit Transaction" : "➕ Add New Transaction"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Product */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Product
          </label>

          <input
            type="text"
            placeholder="Enter product name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Quantity & Unit */}
        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Quantity
            </label>

            <input
              type="number"
              placeholder="0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Unit
            </label>

            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Piece</option>
              <option>Pack</option>
              <option>Box</option>
              <option>Bottle</option>
              <option>Carton</option>
              <option>Strip</option>
              <option>Tube</option>
              <option>Roll</option>
              <option>Dozen</option>
            </select>
          </div>

        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Price (₦)
          </label>

          <input
            type="number"
            placeholder="0.00"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className={`w-full py-3 rounded-xl text-white font-semibold transition ${
            editingId
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {editingId ? "Update Transaction" : "Save Transaction"}
        </button>

      </form>
    </div>
  );
}

export default TransactionForm;