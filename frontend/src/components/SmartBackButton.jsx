import React from 'react';
import { useNavigate } from 'react-router-dom';

const SmartBackButton = ({ fallback = '/' }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1) || navigate(fallback)}
      className="text-sm text-indigo-600 hover:underline mb-4 inline-block"
    >
      ← Go Back
    </button>
  );
};

export default SmartBackButton;
