import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../middle/dataB.json"; // Import JSON directly

function Fees() {
  const [fees, setFees] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load data directly from JSON
    setFees(data.fees || []);
    setTransactions(data.transactions || []);
  }, []);

  // Calculate totals
  const totalFees = fees.reduce((sum, fee) => sum + fee.amount, 0);
  const totalPaid = transactions
    .filter(txn => txn.status === "Successful")
    .reduce((sum, txn) => sum + txn.amount, 0);
  const outstanding = totalFees - totalPaid;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-5">Fee Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-4 rounded-xl">
          <p className="text-gray-500 text-sm">Total Paid</p>
          <h2 className="text-3xl font-bold text-green-600">₦{totalPaid}</h2>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-xl">
          <p className="text-gray-500 text-sm">Outstanding</p>
          <h2 className="text-3xl font-bold text-red-600">₦{outstanding}</h2>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-xl">
          <p className="text-gray-500 text-sm">Total Fees</p>
          <h2 className="text-3xl font-bold text-gray-800">₦{totalFees}</h2>
        </div>
      </div>

      {/* Fee Breakdown Table */}
      <div className="bg-white shadow-lg mt-8 p-6 rounded-xl">
        <h2 className="text-lg font-bold mb-4">Fee Breakdown</h2>
        <div className="grid grid-cols-2 gap-4">
          {fees.map(fee => (
            <div
              key={fee.id}
              className="flex justify-between border-b py-2 text-gray-700"
            >
              <span>{fee.name}</span>
              <span className="font-semibold">₦{fee.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Proceed to Payment */}
      <div className="mt-6">
        <button
          onClick={() => navigate("/Payment")}
          className="bg-purple-900 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Proceed to Make Payment
        </button>
      </div>
    </div>
  );
}

export default Fees;
