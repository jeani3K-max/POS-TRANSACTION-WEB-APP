function DashboardCards({
  totalTransactions,
  totalRevenue,
  totalQuantity,
}) {
  const cards = [
    {
      title: "Transactions",
      value: totalTransactions,
      icon: "🧾",
      color: "bg-blue-500",
    },
    {
      title: "Revenue",
      value: `₦${totalRevenue.toLocaleString()}`,
      icon: "💰",
      color: "bg-green-500",
    },
    {
      title: "Items Sold",
      value: totalQuantity,
      icon: "📦",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">{card.title}</p>

              <h2 className="text-3xl font-bold mt-2">
                {card.value}
              </h2>
            </div>

            <div
              className={`${card.color} w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;