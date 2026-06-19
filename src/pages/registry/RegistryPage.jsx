import React, { useRef, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toastShowError, toastShowSuccess } from "../../utils/Toast.js";
import { AtSign, Logs, UserPlus, UserPlus2 } from "lucide-react";
import * as authAPI from "../../api/authAPI.js";
import * as imageAPI from "../../api/imageAPI.js";
import defaultPF from "./images/defaultPF.jpg"
import imageCompression from 'browser-image-compression';

const RegistryPage = ({ setUserData, setLoggedIn }) => {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [companyID, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [regKey, setRegKey] = useState("");
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [pickedProfile, setPickedProfile] = useState(null);
    const fileInputRef = useRef(null);

    const imageFixSize = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1024,
    };

    const handleRegistry = async () => {
        if (!companyID || !password || !regKey || !role || !fullname) {
            toastShowError("All fields are required.");
            return;
        }

        if (!image) {
            toastShowError("Please Choose Profile Picture.");
            return;
        }

        setLoading(true);

        try {
            const compressedFile = await imageCompression(pickedProfile, options);
            const response = await authAPI.Register(fullname, companyID, password, role, regKey, compressedFile);

            if (response?.success) {
                toastShowSuccess("Registered Successfully!");
                navigate("/")
            }
            else if (response?.status === 409) {
                toastShowError("User Already Exist!");
            }
            else {
                toastShowError("Register failed!");
            }

        } catch (err) {
            toastShowError("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];

        if (file) {
            setPickedProfile(file);
            setImage(URL.createObjectURL(file));
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500">

            {/* Animated Container */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-120 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl shadow-gray-400 border border-gray-100"
            >

                {/* Header */}
                <motion.div className="grid grid-cols-2 text-center mb-5">
                    {/* Sign Up Title */}
                    <motion.div className="mt-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="flex items-center justify-center gap-2"
                        >
                            <UserPlus className="w-7 h-7 text-blue-600" />
                            <motion.h2 className="text-3xl font-extrabold text-gray-800">
                                Sign Up
                            </motion.h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-sm text-gray-500"
                        >
                            Sign Up Your IDP Credentials
                        </motion.p>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div className="grid grid-cols-1">
                        <motion.h6 className="text-[10px] font-semibold text-gray-800">
                            Choose Profile Picture
                        </motion.h6>
                        <motion.div className="flex justify-center mt-1 gap-5">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.80 }}
                                onClick={handleImageClick}
                                className="cursor-pointer hover:opacity-90">
                                <motion.img
                                    src={image ? image : defaultPF}
                                    alt="User"
                                    className="w-18 h-18 rounded-md ring-2 ring-slate-700"
                                />

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </motion.button>

                        </motion.div>
                    </motion.div>
                </motion.div>

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

                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Username */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="mb-0"
                        >
                            <label className="block text-gray-700 font-semibold mb-1">
                                Username <span className="text-cyan-600">●</span>
                            </label>
                            <input
                                type="text"
                                value={companyID}
                                onChange={(e) => setUsername(e.target.value.toUpperCase())}
                                placeholder="Username..."
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            hover:border-gray-400 transition"
                            />
                        </motion.div>

                        {/* Role */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="mb-0"
                        >
                            <label className="block text-gray-700 font-semibold mb-1">
                                Role <span className="text-cyan-600">●</span>
                            </label>

                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            hover:border-gray-400 transition"
                            >
                                <option value="">Select a role</option>
                                <option value="Entry">Entry</option>
                                <option value="Administrator">Administrator</option>
                            </select>
                        </motion.div>

                        {/* Password */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="mb-0"
                        >
                            <label className="block text-gray-700 font-semibold mb-1">
                                Password <span className="text-cyan-600">●</span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={async (e) => {
                                    if (e.key === "Enter") await handleRegistry();
                                }}
                                placeholder="Enter your password..."
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            hover:border-gray-400 transition"
                            />
                        </motion.div>

                        {/* Key */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="mb-0"
                        >
                            <label className="block text-gray-700 font-semibold mb-1">
                                Registry Key <span className="text-red-700">●</span>
                            </label>
                            <input
                                type="password"
                                value={regKey}
                                onChange={(e) => setRegKey(e.target.value)}
                                onKeyDown={async (e) => {
                                    if (e.key === "Enter") await handleRegistry();
                                }}
                                placeholder="Enter key..."
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            hover:border-gray-400 transition"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Fullname */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="mt-1 mb-4"
                    >
                        <label className="block text-gray-700 font-semibold mb-1">
                            Fullname <span className="text-cyan-600">●</span>
                        </label>
                        <input
                            type="text"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value.toUpperCase())}
                            onKeyDown={async (e) => {
                                if (e.key === "Enter") await handleRegistry();
                            }}
                            placeholder="Enter your name..."
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
                        onClick={handleRegistry}
                        disabled={loading}
                        className={`w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700
                        shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 
                        transition-all duration-200
                        ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </motion.button>
                </motion.div>

                {/* Footer */}
                <motion.div className="text-center items-center mt-1">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.80 }}
                        onClick={() => navigate("/")}
                        className="font-extralight cursor-pointer text-sm text-cyan-600"
                    >
                        Sign In
                    </motion.button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-3 text-center text-xs text-gray-400"
                >
                    Secure access to your system
                </motion.p>
            </motion.div>
        </div >
    );
};

export default RegistryPage;