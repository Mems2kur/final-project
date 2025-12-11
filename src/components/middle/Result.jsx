import React, { useEffect, useState } from "react";
import { getResults } from "../middle/services/Api";

function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getResults().then(res => setResults(res.data));
  }, []);

  // Optional: Calculate GPA (weighted by unit)
  const gradePoints = {
    A: 5,
    "A-": 4.5,
    B: 4,
    "B+": 4.5,
    C: 3,
    "C+": 3.5,
    D: 2,
    F: 0
  };

  const totalUnits = results.reduce((sum, r) => sum + r.unit, 0);
  const totalPoints = results.reduce(
    (sum, r) => sum + (gradePoints[r.grade] || 0) * r.unit,
    0
  );

  const gpa = totalUnits ? (totalPoints / totalUnits).toFixed(2) : 0;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-5">Results</h1>

      {/* GPA Summary */}
      <div className="bg-white shadow-md p-4 rounded-xl mb-6">
        <p className="text-gray-600 text-sm">Current GPA</p>
        <h2 className="text-3xl font-bold text-indigo-600">{gpa}</h2>
      </div>

      {/* Results Table */}
      <div className="bg-white shadow-lg p-6 rounded-xl">
        <h2 className="text-lg font-bold mb-4">Course Results</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Course Code</th>
              <th className="p-3 text-left">Course Title</th>
              <th className="p-3 text-left">Units</th>
              <th className="p-3 text-left">Score</th>
              <th className="p-3 text-left">Grade</th>
            </tr>
          </thead>

          <tbody>
            {results.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-3">{item.courseCode}</td>
                <td className="p-3">{item.courseTitle}</td>
                <td className="p-3 font-semibold">{item.unit}</td>
                <td className="p-3">{item.score}</td>
                <td className="p-3 font-semibold">{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Results;
