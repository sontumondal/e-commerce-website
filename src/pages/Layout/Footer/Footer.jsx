import React from 'react'
import { Link } from 'react-router-dom'
import { FaAmazon, FaFacebookF, FaGoogle, FaInstagramSquare, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
            <h4>Your Store</h4>
            <p style={{textAlign:"start"}}>"Selling products and services over the internet has become a staple of modern commerce. That shift is here to stay, presenting opportunities for small business owners to thrive online. But before you set up your internet shop, you have to understand how it all works.

Editor’s note: Looking for the right tools to help build your business website? Fill out the questionnaire below to have our vendor partners contact you about your needs"</p>
        </div>
        <div className="footer-content">
            <h4>Links</h4>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/product">Products</Link></li>
            
        </div>
        <div className="footer-content">
            <h4>Social Media</h4>
            <li><a href="https://www.whatsapp.com/contact" target='_blank'><FaWhatsapp /></a></li>
            <li><a href="https://www.facebook.com/reg/" target='_blank'><FaFacebookF /></a></li>
            <li><a href="https://twitter.com/i/flow/login" target='_blank'><FiTwitter  /></a></li>
            <li><a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank'><FaInstagramSquare  /></a></li>
            <li><a href="https://en.wikipedia.org/wiki/Amazon_(company)" target='_blank'><FaAmazon  /></a></li>
            <li><a href="https://www.google.com/account/about/" target='_blank'><FaGoogle  /></a></li>
            <li><a href="https://www.youtube.com/" target='_blank'><FaYoutube  /></a></li>
           
        </div>
      </div>
      <div className="footercopyright">
        <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads</p>
        <p>	© 2020-2024, YourStore.com, Inc. or its affiliates, All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer
