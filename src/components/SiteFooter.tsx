

import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Newsletter */}
                <div className="newsletter">
                    <h3>Reach Us</h3>
                    <div className="newsletter-input">
                        {/* <div className="display-title text-3xl text-gray-800">Divine Ayurved Yoga  (Shree Shakti ayurveda panchakarma Yoga)</div> */}
                        <div className="mt-2">Divine Ayurved Yoga  (Shree Shakti ayurveda panchakarma Yoga)</div>
                        <div className="mt-4">Bangali kothi chowok opposite Mahalaxmi wedding point Dehradun Uttarakhand</div>
                        <div className="mt-1"><a href="tel:+919528194077">+91-9528194077</a></div>
                        <div className="mt-1"><a href="mailto:vamikanautiyal@gmail.com">vamikanautiyal@gmail.com</a></div>
                    </div>
                </div>

                {/* Services Links */}
                <div className="footer-column">
                    <h3>Services</h3>
                    <ul>
                        <li>Panchakarma</li>
                        <li>Group Classes</li>
                        <li>Yoga travel</li>
                        <li>Instructors</li>
                    </ul>
                </div>

                {/* Connect Links */}
                <div className="footer-column">
                    <h3>CONNECT</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>YouTube</li>
                        <li>Twitter</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-column">
                    <h3>CONTACT</h3>
                    <p>Madison Avenue 21c</p>
                    <p>00 411 22 012</p>
                    <p>00 411 22 012</p>
                    <p>ashtanga@example.com</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <h1 className="brand">ASHTANGA</h1>
                <div className="footer-meta">
                    <div className="social-icons">
                        <span>IG</span>
                        <span>LN</span>
                        <span>FB</span>
                    </div>
                    <p>© 2023 Qode Interactive, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


