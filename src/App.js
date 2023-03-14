import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Movies, ContactUs, Error, SingleMovie } from "./pages/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="Movie/:id" element={<SingleMovie />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
