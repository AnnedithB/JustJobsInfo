"use client"
import React from 'react'
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
function Nav() {
    return (
        <div>
            <div className="nav-area">
                <nav>
                    <ul>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="/">
                                Home
                               
                            </Link>
                            
                        </li>
                        <li className="has-dropdown position-static with-megamenu margin-single-0">
                            <Link className="nav-link" href="/#">
                                Resume Audit
                                
                            </Link>
                            
                        </li>
                        <li>
                            <Link className="nav-link" href="/case-studies">
                                Job Listings
                            </Link>
                        </li>
                        <li className="has-dropdown position-static with-megamenu">
                            <Link className="nav-link" href="/service">
                                Resources{" "}
                                <i className="fa-duotone fa-regular fa-chevron-down" />
                            </Link>
                            <div className="submenu">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                                <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/service-single"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/22.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">CV Templates</h4>
                                                            <p>Use our ready made Industry-ready Templates</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                                
                                               
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                            <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/it-strategies"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/23.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Important Links</h4>
                                                            <p>Links to help you land your dream Job</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="single-menu parent-nav">
                                            <li>
                                                    <Link
                                                        className="single-service-area-wrapper"
                                                        href="/cyber-security-service"
                                                    >
                                                        <div className="icon">
                                                            <img
                                                                src="/assets/images/service/icons/24.svg"
                                                                alt="service"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Downloadable Resources</h4>
                                                            <p>Explore and Download Helpful Resources</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="has-dropdown ">
                            <Link className="nav-link" href="/blog-grid">
                                Blog 
                            </Link>
                            
                        </li>
                        <li>
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav