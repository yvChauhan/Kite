
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/Login.jsx";
import CreateClubs from "./features/club/CreateClubs.jsx";
import CreatePlayer from "./features/player/CreatePlayer.jsx";
import ListPlayer from "./features/player/ListPlayer.jsx";

// Placeholder components for edit/list pages
const EditClub = () => <div className="p-8 text-center">Edit Club Page</div>;
const EditPlayer = () => <div className="p-8 text-center">Edit Player Page</div>;
const ListClubs = () => <div className="p-8 text-center">List Clubs Page</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/clubs" element={<ListClubs />} />
        <Route path="/clubs/create" element={<CreateClubs />} />
        <Route path="/clubs/edit" element={<EditClub />} />
        <Route path="/players" element={<ListPlayer />} />
        <Route path="/player/create" element={<CreatePlayer />} />
        <Route path="/player/edit" element={<EditPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
