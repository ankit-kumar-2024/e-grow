import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ClassSelection from "./pages/ClassSelection";
import ChapterSelection from "./pages/ChapterSelection";
import SubjectSelection from "./pages/SubjectSelection";
import WelcomePage from './components/WelcomePage';
// import Login from './pages/Login';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login onLogin={setUser} />} /> */}
        <Route path="/" element={<Login onLogin={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={user ? <WelcomePage /> : <Login />} />
        <Route path="/classes" element={<ClassSelection />} />
        <Route path="/subjects" element={<ChapterSelection />} />
        <Route path="/subjects" element={<SubjectSelection />} />
      </Routes>
    </Router>
  );
};

export default App;
