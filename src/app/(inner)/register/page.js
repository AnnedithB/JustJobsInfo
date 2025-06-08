"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import './register.css';
import BackToTop from "@/components/common/BackToTop";
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterOne";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle register logic here
        console.log('Register attempt:', formData);
    };

    return (
        <>
            <HeaderOne />
            <div className="register-page-wrapper">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-lg-5">
                            <div className="register-image-wrapper">
                                <img 
                                    src="/assets/images/banner/02.jpg" 
                                    alt="Register" 
                                    className="register-image"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="register-form-wrapper">
                                <div className="register-header text-center">
                                    <Link href="/" className="logo-area">
                                        <img className='header-logo' src="/assets/images/logo/justjobslogo.png" alt="logo" />
                                    </Link>
                                    <h2 className="title">Create Account</h2>
                                    <p className="subtitle">Please fill in the details to register</p>
                                </div>
                                <form onSubmit={handleSubmit} className="register-form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
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
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <label className="custom-checkbox remember-me">
                                        <input type="checkbox" id="terms" required />
                                        <span className="checkmark"></span>
                                        I agree to the <Link href="/terms-of-use">Terms of Use</Link>
                                    </label>
                                    <button type="submit" className="rts-btn btn-primary">
                                        Register
                                        <img
                                            className="injectable"
                                            src="/assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </button>
                                    <div className="login-link text-center">
                                        Already have an account? <Link href="/login">Login here</Link>
                                    </div>
                                </form>
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