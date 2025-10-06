import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}
