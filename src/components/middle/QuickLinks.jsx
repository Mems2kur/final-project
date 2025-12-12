// QuickLinks.jsx
import React, { useState, useEffect } from "react";
import { CreditCard, BookOpen, FileText, ChevronRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import data from "../middle/dataB.json" // import JSON directly

const links = [
  { id: 1, label: "Payment History", icon: <CreditCard className="w-5 h-5" />, dropdown: "payment", route: "/Transaction" },
  { id: 2, label: "Courses", icon: <BookOpen className="w-5 h-5" />, dropdown: "courses", route: "/Course" },
  { id: 3, label: "Results", icon: <FileText className="w-5 h-5" />, dropdown: "results", route: "/Result" },
];

function QuickLinks() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [courses, setCourses] = useState([]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // load data directly from JSON
    setTransactions(data.transactions || []);
    setCourses(data.courses || []);
    setResults(data.results || []);
  }, []);

  const toggleDropdown = (link) => {
    setOpenDropdown(openDropdown === link.id ? null : link.id);
    if (link.route) {
      navigate(link.route); // navigate when dropdown is clicked
    }
  };

  return (
    <div className="py-14 mt-20 px-5 bg-white rounded-xl shadow-md">
      <h1 className="text-xl font-semibold text-gray-700">Quick Links</h1>

      <ul className="flex flex-col mt-6 gap-4">
        {links.map((link) => (
          <li key={link.id} className="flex flex-col gap-2">
            <div
              className="flex justify-between bg-[#dbdafd] p-3 rounded-xl items-center gap-3 text-gray-600 cursor-pointer hover:text-indigo-500 transition-colors"
              onClick={() => toggleDropdown(link)}
            >
              <div className="flex items-center gap-3">
                {link.icon}
                <span>{link.label}</span>
              </div>

              {openDropdown === link.id ? (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-400" />
              )}
            </div>

            {/* Payment History Dropdown */}
            {openDropdown === link.id && link.dropdown === "payment" && (
              <div className="ml-6 mt-2 bg-gray-50 p-3 rounded-lg border">
                <div className="grid grid-cols-3 font-semibold text-gray-700 border-b pb-2">
                  <span>Description</span>
                  <span>Status</span>
                  <span>Amount</span>
                </div>

                {transactions.map((item) => (
                  <div key={item.id} className="grid grid-cols-3 py-2 border-b last:border-b-0 text-gray-600">
                    <span>{item.description}</span>
                    <span className={item.status === "Successful" ? "text-green-600" : "text-red-600"}>
                      {item.status === "Successful" ? "Paid" : "Unpaid"}
                    </span>
                    <span>₦{item.amount}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Courses Dropdown */}
            {openDropdown === link.id && link.dropdown === "courses" && (
              <div className="ml-6 mt-2 bg-gray-50 p-3 rounded-lg border flex flex-col gap-2">
                {courses.map((course) => (
                  <span
                    key={course.id}
                    className="text-gray-700 p-2 bg-gray-100 rounded hover:bg-gray-200"
                  >
                    {course.code} — {course.title}
                  </span>
                ))}
              </div>
            )}

            {/* Results Dropdown */}
            {openDropdown === link.id && link.dropdown === "results" && (
              <div className="ml-6 mt-2 bg-gray-50 p-3 rounded-lg border">
                <div className="grid grid-cols-3 font-semibold text-gray-700 border-b pb-2">
                  <span>Course</span>
                  <span>Score</span>
                  <span>Grade</span>
                </div>

                {results.map((r, idx) => (
                  <div key={idx} className="grid grid-cols-3 py-2 border-b last:border-b-0 text-gray-600">
                    <span>{r.courseCode}</span>
                    <span>{r.score}</span>
                    <span>{r.grade}</span>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickLinks;
