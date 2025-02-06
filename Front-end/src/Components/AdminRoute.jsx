import { Navigate, Outlet } from "react-router-dom";
import { getUserRole } from "../utils/auth"; // Function to decode JWT and get role

const AdminRoute = () => {
    const role = getUserRole();

    return role === "admin" ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
