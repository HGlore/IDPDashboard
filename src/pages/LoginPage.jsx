import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import {LoginService} from "../services/LoginSevice";
import {toastShowError, toastShowSuccess} from "../utils/Toast.js";

const LoginPage = ({setUserData, setLoggedIn}) => {
    const navigate = useNavigate();
    const [companyID, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {

        if (!companyID || !password) {
            toastShowError("Please fill both username & password.");
            return;
        }

        setLoading(true);

        try {
            const userData = await LoginService(companyID, password);
            setUserData(userData);
            setLoggedIn(true);
            toastShowSuccess("Logged In!.");
            navigate("/dashboard");
        } catch (err) {
            console.error("Login error:", err);
            toastShowError("Login failed: User not found!");
        } finally {
            setLoading(false);
        }
    };

    return (<div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-80 bg-white p-6 rounded-xl shadow-2xl shadow-black">
            <h2 className="text-2xl font-semibold text-center mb-6">LOGIN</h2>

            <label className="font-bold relative inline-block mb-1">
                Username:
                <span className="text-orange-700 ml-1">●</span>
            </label>
            <input
                type="text"
                value={companyID}
                onChange={(e) => setUsername(e.target.value.toUpperCase())}
                placeholder="Username..."
                className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="font-bold relative inline-block mb-1">
                Password:
                <span className="text-orange-700 ml-1">●</span>
            </label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={async (e) => {
                    if (e.key === "Enter") {
                        await handleLogin();
                    }
                }}
                placeholder="Password..."
                className="w-full mb-6 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                onClick={handleLogin}
                disabled={loading}
                className={`relative w-full bg-blue-600 text-white py-2 rounded
                      transition-all duration-200
                      hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5
                      active:scale-95 active:animate-pulse
                      ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                {loading ? "Logging in..." : "Sign In"}
            </button>
        </div>
    </div>);
};

export default LoginPage;
