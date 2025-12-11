// TransactionReceipt.jsx
import React from "react";

function TransactionReceipt({ transaction }) {
  return (
    <div
      style={{
        marginBottom: "20px",
        padding: "20px",
        width: "100%",
      }}
    >
      <h2 className="text-xl font-bold mb-4">Transaction Receipt</h2>
      <p>
        <strong>Date:</strong> {transaction.date}
      </p>
      <p>
        <strong>Description:</strong> {transaction.description}
      </p>
      <p>
        <strong>Amount:</strong> ₦{transaction.amount}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        {transaction.status === "Successful" ? "Paid" : "Unpaid"}
      </p>
    </div>
  );
}

export default TransactionReceipt;
