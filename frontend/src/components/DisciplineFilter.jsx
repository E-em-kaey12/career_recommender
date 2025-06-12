import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmartBackButton from './SmartBackButton';

const DisciplineFilter = ({ student, updateStudent }) => {
  const [interests, setInterests] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!student.fields.length || interests.length === 0) {
      alert("Please enter interests.");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/discipline-filter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: student.fields, interests }),
      });

      if (!res.ok) throw new Error("Failed to fetch disciplines");
      const data = await res.json();
      updateStudent({ ...student, interests, disciplines: data.recommended_disciplines });
      setDisciplines(data.recommended_disciplines);
    } catch (error) {
      console.error(error);
      alert("Could not fetch disciplines.");
    }
  };

  return (
    <div className="space-y-6">
      <SmartBackButton />
      <h2 className="text-2xl font-semibold text-indigo-700">Stage 2: Explore Your Interests</h2>
      <p className="text-gray-700">
        Tell us what excites you. We'll match those interests to possible academic disciplines in your suggested fields.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Interests (e.g., design, writing, animals)"
          onChange={(e) => setInterests(e.target.value.split(',').map((s) => s.trim()))}
          className="border w-full p-2 rounded"
        />
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
          Get Discipline Suggestions
        </button>
      </form>

      {disciplines.length > 0 && (
        <div>
          <p className="text-gray-800 font-medium mt-4">You might be great at:</p>
          <ul className="list-disc list-inside text-indigo-700">
            {disciplines.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
          <button
            onClick={() => navigate('/stage-3')}
            className="mt-3 text-indigo-600 underline hover:text-indigo-800"
          >
            Proceed to Stage 3
          </button>
        </div>
      )}
    </div>
  );
};

export default DisciplineFilter;
