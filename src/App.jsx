import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/auth/RegisterPage";

function App() {
  return (
    <BrowserRouter>
        <RegisterPage />
    </BrowserRouter>
  );
}

export default App;