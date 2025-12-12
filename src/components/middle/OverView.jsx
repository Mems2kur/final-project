
import React, { useEffect, useState } from "react";
import { CreditCard, BookOpen, Calendar, Star } from "lucide-react";
import data from "../middle/dataB.json"

function OverView() {
 const [courses, setCourses] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setCourses(data.courses || []);
    setResults(data.results || []);
  }, []);

  // Registered Courses
  const registeredCourses = courses.length;

  // Spill Over Courses: failed courses (score < 50 or grade below C)
  const spillOverCourses = results.filter((r) => r.grade === "D" || r.grade === "F").length;

  // Second Semester Courses: assuming you have semester info, else default
  const secondSemesterCourses = courses.filter((c) => c.semester === 2).length || 0;

  // CGPA calculation
  const totalUnits = results.reduce((sum, r) => sum + r.unit, 0);
  const totalPoints = results.reduce((sum, r) => {
    let gradePoint = 0;
    switch (r.grade) {
      case "A": gradePoint = 5; break;
      case "B": gradePoint = 4; break;
      case "C": gradePoint = 3; break;
      case "D": gradePoint = 2; break;
      case "F": gradePoint = 0; break;
      default: gradePoint = 0;
    }
    return sum + gradePoint * r.unit;
  }, 0);

  const cgpa = totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : 0;

  const cards = [
    {
      id: 1,
      icon: <CreditCard className="w-8 h-8 text-indigo-500" />,
      heading: "Registered Courses",
      number: registeredCourses,
    },
    {
      id: 2,
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      heading: "Spill Over Courses",
      number: spillOverCourses,
    },
    {
      id: 3,
      icon: <Calendar className="w-8 h-8 text-yellow-500" />,
      heading: "Second Semester",
      number: secondSemesterCourses,
    },
    {
      id: 4,
      icon: <Star className="w-8 h-8 text-pink-500" />,
      heading: "CGPA",
      number: cgpa,
    },
  ];

  return (
    <div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-5 rounded-xl shadow-md flex bg-[#dbdafd] gap-4 border"
            >
              <div>{card.icon}</div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-sm">{card.heading}</p>
                <p className="text-2xl font-semibold text-gray-700">{card.number}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverView;