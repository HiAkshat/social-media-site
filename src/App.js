import './App.css';
import { Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./pages/home/home"
import Profile from "./pages/profile/profile"
import Login from "./pages/login/login"
import Register from "./pages/register/register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
  }

export default App;
