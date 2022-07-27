import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Detailspage from "./pages/DetailsPage";
import Commicslist from "./pages/CommicsList";
import Loginpage from "./pages/LoginPage";
import Signuppage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/details" element={<Detailspage />}></Route>
          <Route path="/commics" element={<Commicslist />}></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route path="/signup" element={<Signuppage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
