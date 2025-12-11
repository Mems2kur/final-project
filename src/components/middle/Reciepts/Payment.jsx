import React, { useEffect, useState } from "react";
import { getFees, getTransactions } from "../services/Api";

function Payment() {
  const [fees, setFees] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getFees().then(res => setFees(res.data));
    getTransactions().then(res => setTransactions(res.data));
  }, []);

  // Calculate totals
  const totalFees = fees.reduce((sum, fee) => sum + fee.amount, 0);
  const totalPaid = transactions
    .filter(txn => txn.status === "Successful")
    .reduce((sum, txn) => sum + txn.amount, 0);
  const outstanding = totalFees - totalPaid;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Payment Page</h1>

      <div className="bg-white shadow-lg p-6 rounded-xl mb-6">
        <h2 className="text-lg font-semibold mb-4">Fee Summary</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <span>Total Fees:</span>
          <span className="font-semibold">₦{totalFees}</span>

          <span>Total Paid:</span>
          <span className="font-semibold text-green-600">₦{totalPaid}</span>

          <span>Outstanding:</span>
          <span className="font-semibold text-red-600">₦{outstanding}</span>
        </div>
      </div>

      {/* Payment Options */}
      <button className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
