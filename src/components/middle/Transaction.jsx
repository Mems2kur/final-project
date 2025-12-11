// Transactions.jsx
import React, { useEffect, useState, useRef } from "react";
import { getTransactions } from "../middle/services/Api";
import TransactionReceipt from "../middle/Reciepts/TransactionReceipt"
import { downloadPDF } from "../utils/pdf";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const receiptRef = useRef(null); // reference for the PDF container

  useEffect(() => {
    getTransactions().then((res) => setTransactions(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-5">Transaction History</h1>

      {/* Transaction Table */}
      <div className="bg-white shadow-lg p-6 rounded-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2">Date</th>
              <th className="py-2">Description</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-b">
                <td className="py-2">{txn.date}</td>
                <td className="py-2">{txn.description}</td>
                <td className="py-2">₦{txn.amount}</td>
                <td
                  className={`py-2 font-semibold ${
                    txn.status === "Successful" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {txn.status === "Successful" ? "Paid" : "Unpaid"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hidden container for PDF */}
      <div
        ref={receiptRef}
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          width: "800px",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        {transactions.map((txn) => (
          <TransactionReceipt key={txn.id} transaction={txn} />
        ))}
      </div>

      {/* Download PDF Button */}
      {transactions.length > 0 && (
        <button
          className="mt-6 bg-purple-900 text-white p-3 rounded-lg"
          onClick={async () => {
            if (!receiptRef.current) return;
            await downloadPDF(receiptRef.current, "All_Transactions");
          }}
        >
          Download All Transactions PDF
        </button>
      )}
    </div>
  );
}

export default Transactions;
