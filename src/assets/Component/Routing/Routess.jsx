import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Calendar from "./pages/Calendar";
import Tickets from "./pages/Tickets";
import FileManager from "./pages/FileManager";
import Kanban from "./pages/Kanban";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
