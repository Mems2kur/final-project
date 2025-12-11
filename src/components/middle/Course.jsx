import React, { useEffect, useState } from "react";
import { getCourses } from "../middle/services/Api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((res) => setCourses(res.data));
  }, []);

  const totalUnits = courses.reduce((sum, c) => sum + c.unit, 0);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-5">Registered Courses</h1>

      {/* Summary */}
      <div className="bg-white shadow-md p-4 rounded-xl mb-6">
        <p className="text-gray-600 text-sm">Total Units Registered</p>
        <h2 className="text-3xl font-bold text-indigo-600">{totalUnits}</h2>
      </div>

      {/* Course Table */}
      <div className="bg-white shadow-lg p-6 rounded-xl">
        <h2 className="text-lg font-bold mb-4">Course List</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Course Code</th>
              <th className="p-3 text-left">Course Title</th>
              <th className="p-3 text-left">Units</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-b">
                <td className="p-3">{course.code}</td>
                <td className="p-3">{course.title}</td>
                <td className="p-3 font-semibold">{course.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Courses;
