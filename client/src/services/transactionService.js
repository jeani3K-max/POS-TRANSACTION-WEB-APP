const API_URL = `${import.meta.env.VITE_API_URL}/transactions`;

export async function getTransactions() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch transactions.");
  }

  return response.json();
}

export async function createTransaction(transaction) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });

  return response.json();
}

export async function updateTransaction(id, transaction) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  });

  return response.json();
}

export async function deleteTransaction(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  return response.json();
}