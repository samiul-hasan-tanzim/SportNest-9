"use client";
import Link from "next/link";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8 border border-slate-200">
                <div className="text-center mb-6">
                    <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-white bg-linear-to-r from-green-500 via-emerald-500 to-lime-500 shadow">
                        Create Account
                    </span>

                    <p className="text-slate-500 text-sm mt-3">
                        Join SportNest and start booking sports facilities
                    </p>
                </div>

                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                    >
                        <Label>Full Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input
                            placeholder="john@example.com"
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="photo"
                        type="url"
                        validate={(value) => {
                            try {
                                new URL(value);
                                return null;
                            } catch {
                                return "Please enter a valid image URL";
                            }
                        }}
                    >
                        <Label>Photo URL</Label>
                        <Input
                            placeholder="https://image-url.com/photo.jpg"
                        />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Must contain at least one uppercase letter";
                            }
                            if (!/[a-z]/.test(value)) {
                                return "Must contain at least one lowercase letter";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>

                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className={'w-full'}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <Description>
                            Minimum 6 characters with uppercase and lowercase letters
                        </Description>

                        <FieldError />
                    </TextField>
                    <Button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full"
                    >
                        Register
                    </Button>
                    <div className="flex items-center gap-3 my-2">
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <span className="text-xs text-slate-400">OR</span>
                        <div className="flex-1 h-px bg-slate-200"></div>
                    </div>
                    <Button
                        variant="bordered"
                        className="w-full rounded-2xl border-slate-300 font-medium"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="20"
                            height="20"
                        >
                            <path
                                fill="#FFC107"
                                d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
                            />
                            <path
                                fill="#FF3D00"
                                d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                            />
                            <path
                                fill="#4CAF50"
                                d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.3 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                            />
                            <path
                                fill="#1976D2"
                                d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.2 5.5-6 7.1l6.2 5.2C39.8 36.5 44 30.8 44 24c0-1.3-.1-2.4-.4-3.5z"
                            />
                        </svg>

                        Continue with Google
                    </Button>

                    <p className="text-center text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-green-600 font-medium hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;