import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage';
import FieldFilter from './components/FieldFilter';
import DisciplineFilter from './components/DisciplineFilter';
import CourseRecommendation from './components/CourseRecommendation';

import MainLayout from './components/MainLayout';
import StageLayout from './components/StageLayout';

function App() {
  const [student, setStudent] = useState({
    name: '',
    subjects: [],
    interests: [],
    fields: [],
    disciplines: [],
  });

  const updateStudent = (updated) => setStudent(updated);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <WelcomePage />
            </MainLayout>
          }
        />
        <Route
          path="/stage-1"
          element={
            <MainLayout>
              <StageLayout stage={1} totalStages={3}>
                <FieldFilter student={student} updateStudent={updateStudent} />
              </StageLayout>
            </MainLayout>
          }
        />
        <Route
          path="/stage-2"
          element={
            <MainLayout>
              <StageLayout stage={2} totalStages={3}>
                <DisciplineFilter student={student} updateStudent={updateStudent} />
              </StageLayout>
            </MainLayout>
          }
        />
        <Route
          path="/stage-3"
          element={
            <MainLayout>
              <StageLayout stage={3} totalStages={3}>
                <CourseRecommendation student={student} />
              </StageLayout>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
