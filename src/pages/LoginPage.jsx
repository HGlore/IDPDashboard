import React, { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toastShowError, toastShowSuccess } from "../utils/Toast.js";
import { Database } from "lucide-react";
import * as authAPI from "../api/authAPI.js";
import * as imageAPI from "../api/imageAPI.js";

const LoginPage = ({ setUserData, setLoggedIn }) => {
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
            const userData = await authAPI.Login(companyID, password);

            imageAPI.getProfileImage().then(async res => {
                if (res.success) {
                    setUserData(userData);
                    setLoggedIn(true);
                    toastShowSuccess("Logged In!.");
                    navigate("/dashboard");
                } else {
                    toastShowError("Login failed: Something Went Wrong!");
                }
            });

        } catch (err) {
            toastShowError("Login failed: User not found!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-300">

            {/* Animated Container */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-96 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl shadow-gray-400 border border-gray-100"
            >

                {/* Header */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="flex items-center justify-center gap-2"
                    >
                        <Database className="w-7 h-7 text-blue-600" />
                        <h2 className="text-3xl font-extrabold text-gray-800">
                            IDP
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-sm text-gray-500 mt-1"
                    >
                        Intelligent Data Platform
                    </motion.p>
                </div>

                {/* Form Fields */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >

                    {/* Username */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="mb-5"
                    >
                        <label className="block text-gray-700 font-semibold mb-1">
                            Username <span className="text-orange-500">●</span>
                        </label>
                        <input
                            type="text"
                            value={companyID}
                            onChange={(e) => setUsername(e.target.value.toUpperCase())}
                            placeholder="Enter your username"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            hover:border-gray-400 transition"
                        />
                    </motion.div>

                    {/* Password */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="mb-6"
                    >
                        <label className="block text-gray-700 font-semibold mb-1">
                            Password <span className="text-orange-500">●</span>
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={async (e) => {
                                if (e.key === "Enter") await handleLogin();
                            }}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            hover:border-gray-400 transition"
                        />
                    </motion.div>

                    {/* Button */}
                    <motion.button
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        onClick={handleLogin}
                        disabled={loading}
                        className={`w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-800
                        shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 
                        transition-all duration-200
                        ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {loading ? "Logging in..." : "Sign In"}
                    </motion.button>
                </motion.div>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-5 text-center text-xs text-gray-400"
                >
                    Secure access to your system
                </motion.p>
            </motion.div>
        </div>
    );
};

export default LoginPage;