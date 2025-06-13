import React, { useEffect, useState } from 'react';
import SmartBackButton from './SmartBackButton';

const CourseRecommendation = ({ student }) => {
  const [groupedCourses, setGroupedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const { disciplines = [], fields = [] } = student || {};

  useEffect(() => {
    const fetchCourses = async () => {
      if (!disciplines.length || !fields.length) {
        setGroupedCourses([]);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("https://career-backend-lmsq.onrender.com/course-recommendation", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ disciplines, fields }),
        });

        if (!res.ok) throw new Error('Server error');
        const data = await res.json();

        setGroupedCourses(data.grouped_recommendations || []);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setGroupedCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [disciplines, fields]);

  return (
    <div className="space-y-6">
      <SmartBackButton />
      <h2 className="text-2xl font-semibold text-indigo-700">Stage 3: Your Course Options</h2>
      <p className="text-gray-700">
        Based on your selected interests, here are the courses we think you'll enjoy:
      </p>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : groupedCourses.length === 0 ? (
        <p className="text-red-600">No courses could be recommended at this time.</p>
      ) : (
        groupedCourses.map((group, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-lg font-bold text-indigo-800">{group.discipline}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {group.courses.map((course, cidx) => (
                <li
                  key={cidx}
                  className="bg-indigo-50 border border-indigo-200 p-3 rounded shadow-sm hover:shadow-md text-gray-800"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}

      <div className="text-center mt-6">
        <p className="text-gray-600">We’re proud of you for reaching this far. Stay curious, stay focused.</p>
        <p className="text-indigo-700 font-semibold mt-1">Your journey is just beginning!</p>
      </div>
    </div>
  );
};

export default CourseRecommendation;

