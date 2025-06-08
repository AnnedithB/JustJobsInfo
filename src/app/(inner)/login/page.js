"use client";
import React, { useState } from 'react';
import BackToTop from "@/components/common/BackToTop";
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";
import Link from 'next/link';
import './login.css';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', formData);
    };

    return (
        <>
            <HeaderOne />

            <div className="login-page-wrapper">

                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-lg-7">
                            <div className="login-form-wrapper">
                                <div className="login-header text-center">
                                    <Link href="/" className="logo-area">
                                        <img className='header-logo' src="/assets/images/logo/justjobslogo.png" alt="logo" />
                                    </Link>
                                    <h2 className="title">Welcome Back</h2>
                                    <p className="subtitle">Please enter your credentials to login</p>
                                </div>

                                <form onSubmit={handleSubmit} className="login-form">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-options">
                                        <label className="custom-checkbox remember-me">
                                            <input type="checkbox" id="remember" />
                                            <span className="checkmark"></span>
                                            Remember me
                                        </label>
                                        <Link href="/forgot-password" className="forgot-password">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <button type="submit" className="rts-btn btn-primary">
                                        Login
                                        <img
                                            className="injectable"
                                            src="/assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </button>

                                    <div className="register-link text-center">
                                        Don't have an account? <Link href="/register">Register here</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="login-image-wrapper">
                                <img
                                    src="/assets/images/banner/01.webp"
                                    alt="Login"
                                    className="login-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BackToTop />
            <FooterOne />
        </>
    );
}