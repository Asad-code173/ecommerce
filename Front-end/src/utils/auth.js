import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

export const getUserRole = () => {
    const token = Cookies.get("token"); // Get token from cookies
    if (!token) return null;

    try {
        const decoded = jwtDecode(token);
        return decoded.role; // Ensure your JWT contains "role"
    } catch (error) {
        console.error("Invalid Token:", error);
        return null;
    }
};
