import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmartBackButton from './SmartBackButton';

const FieldFilter = ({ student, updateStudent }) => {
  const [subjects, setSubjects] = useState([]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!student.name || subjects.length === 0) {
      alert("Please enter your name and at least one subject.");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/field-filter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: student.name, subjects }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      updateStudent({ ...student, subjects, fields: data.recommended_fields });
      setResults(data.recommended_fields);
    } catch (error) {
      alert("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <SmartBackButton />
      <h2 className="text-2xl font-semibold text-indigo-700">Stage 1: Subject Combination</h2>
      <p className="text-gray-700">
        Let's start with what subjects you're most confident in. We'll use them to find general academic fields that match your strengths.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your full name"
          value={student.name}
          onChange={(e) => updateStudent({ ...student, name: e.target.value })}
          className="border w-full p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Subjects (e.g., Mathematics , Chemistry)"
          onChange={(e) => setSubjects(e.target.value.split(',').map((s) => s.trim()))}
          className="border w-full p-2 rounded"
        />
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          Get Field Recommendation
        </button>
      </form>

      {results.length > 0 && (
        <div>
          <p className="text-gray-800 mt-4">Your suggested academic fields:</p>
          <ul className="list-disc list-inside text-indigo-700">
            {results.map((field, i) => <li key={i}>{field}</li>)}
          </ul>
          <button
            onClick={() => navigate('/stage-2')}
            className="mt-3 text-indigo-600 underline hover:text-indigo-800"
          >
            Proceed to Stage 2
          </button>
        </div>
      )}
    </div>
  );
};

export default FieldFilter;
