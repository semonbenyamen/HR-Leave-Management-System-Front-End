import {  Routes, Route } from "react-router-dom";
import LeaveBalance from "./components/Auth/LeaveBalance";
import Login from "./components/Auth/Login"

function App() {
  return (
   
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<LeaveBalance />} />
      </Routes>
  
  );
}

export default App;