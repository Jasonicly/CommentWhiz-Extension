import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Extension from "./pages/Extension";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Extension />} />
            </Routes>
        </Router>
    );
}

export default App;
