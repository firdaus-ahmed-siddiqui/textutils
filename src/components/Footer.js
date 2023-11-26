import React from 'react'
import './css/Footer.css'
export default function Footer(props) {
  return (
    <>
        <footer className={`bg-${props.appColor}`} style={{color : props.mode ==='dark' ? '#ffffff' : '#000000'}}>
            <div className="container py-4">
                <div className="row">
                <div className="col-md-4">
                    <h5>About Us</h5>
                    <p>A brief description of your company or website.</p>
                </div>
                <div className="col-md-4">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled" >
                    <li><a style={{color : props.mode ==='dark' ? '#ffffff' : '#000000'}} href="/">Home</a></li>
                    <li><a style={{color : props.mode ==='dark' ? '#ffffff' : '#000000'}} href="/">Services</a></li>
                    <li><a style={{color : props.mode ==='dark' ? '#ffffff' : '#000000'}} href="/">Products</a></li>
                    <li><a style={{color : props.mode ==='dark' ? '#ffffff' : '#000000'}} href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Contact Us</h5>
                    <p>Email: info@example.com<br/>Phone: 123-456-7890</p>
                    <div className="social-icons">
                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                </div>
                <hr className="mt-2 mb-4"/>
                <div className="row">
                <div className="col-md-12 text-center">
                    <p>&copy; 2023 Your Website. All rights reserved.</p>
                </div>
                </div>
            </div>
        </footer>
    </>
  )
}
