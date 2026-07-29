export default function TransactionTable({
  transactions,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">

        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-3 text-center">Product</th>
            <th className="px-4 py-3 text-center">Quantity</th>
            <th className="px-4 py-3 text-center">Unit</th>
            <th className="px-4 py-3 text-center">Price</th>
            <th className="px-4 py-3 text-center">Total</th>
            <th className="px-4 py-3 text-center">Date</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td
                colSpan="7"
                className="py-8 text-center text-slate-500"
              >
                No transactions found.
              </td>
            </tr>
          ) : (
            transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b hover:bg-slate-50 transition-colors"
              >
                <td className="px-4 py-3 text-center">
                  {transaction.product}
                </td>

                <td className="px-4 py-3 text-center">
                  {transaction.quantity}
                </td>

                <td className="px-4 py-3 text-center">
                  {transaction.unit}
                </td>

                <td className="px-4 py-3 text-center">
                  ₦{Number(transaction.price).toLocaleString()}
                </td>

                <td className="px-4 py-3 text-center font-semibold text-green-600">
                  ₦{Number(transaction.total).toLocaleString()}
                </td>

                <td className="px-4 py-3 text-center">
                  {transaction.createdAt
                    ? new Date(
                        transaction.createdAt.replace(" ", "T") + "Z"
                      ).toLocaleString("en-NG", {
                        timeZone: "Africa/Lagos",
                      })
                    : "N/A"}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => handleEdit(transaction)}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(transaction.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>

                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
}