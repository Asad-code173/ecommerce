import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import Dashboard from "./Admin/Pages/Dashboard.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>


        </Routes>
      </Router>
  );
}

export default App;
