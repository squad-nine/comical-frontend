import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import View from "@pages/View";
import Comics from "@pages/Comics";
import Login from "@pages/Login";
import Signup from "@pages/Signup";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<View />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
