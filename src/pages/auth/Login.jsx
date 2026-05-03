import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    // HANDLE SUBMIT (SUDAH FIX)
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            const response = await axios.post(
                "https://dummyjson.com/auth/login",
                {
                    username: dataForm.email, // pakai username dummyjson
                    password: dataForm.password,
                }
            );

            // sukses → redirect
            navigate("/");
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || "Login gagal");
            } else {
                setError("Network error");
            }
        } finally {
            setLoading(false);
        }
    };

    // ERROR UI
    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null;

    // LOADING UI
    const loadingInfo = loading ? (
        <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
            <ImSpinner2 className="me-2 animate-spin" />
            Mohon Tunggu...
        </div>
    ) : null;

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Welcome Back 👋
            </h2>

            {errorInfo}
            {loadingInfo}

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
                        placeholder="contoh: kminchelle"
                        name="email"
                        value={dataForm.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm"
                        placeholder="contoh: 0lelplR"
                        name="password"
                        value={dataForm.password}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                        className="w-full bg-[#4E342E] hover:bg-[#3E2723] text-white font-bold py-3 px-4 rounded-2xl transition-all active:scale-95 shadow-lg shadow-stone-200 disabled:opacity-50"
                        disabled={loading}
                >
                    {loading ? "Waking up the beans..." : "Start Shift"}
                </button>
            </form>
        </div>
    );
}