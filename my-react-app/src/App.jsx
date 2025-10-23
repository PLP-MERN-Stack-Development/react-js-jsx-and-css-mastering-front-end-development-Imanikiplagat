import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import APIList from "./pages/APIlist";
import TaskManager from "./features/TaskManager";
import { ThemeProvider } from "./context/Themecontext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api" element={<APIList />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
