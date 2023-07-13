import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Checker from "./pages/checker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/spell_checker" element={<Checker />} />
      </Routes>
    </Router>
  );
}

export default App;
