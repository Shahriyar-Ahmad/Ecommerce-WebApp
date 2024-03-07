// Footer.js
import React from 'react';

// Icons import
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="items-center justify-between px-5 md:px-24 gap-4 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-2 my-3 px-5">
        {/* Company Info */}
        <div className="mr-2">
        <h2 className='text-xl md:text-3xl font-thin'>Apple<b className='font-bold'>Store<b className='font-xl font-extrabold'>.</b></b></h2>
          <p className="text-md my-2">
          Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
          Gravida massa volutpat aenean odio erat nullam fringilla.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <span  className="text-gray-400 hover:text-gray-500">
              <FaFacebookF />
            </span>
            <span  className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">
              <FaInstagram />
            </span>
            <span className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">
              <FaYoutube />
            </span>
            <span className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">
              <FaXTwitter />
            </span>  
            <span className="text-gray-400 hover:text-gray-600 hover:cursor-pointer">
              <FaLinkedinIn />
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-6">
          <h2 className="text-lg font-samibold mb-4">Quick Links</h2>
          <ul className="list-none">
            <li className="mb-2">
              <span className="hover:text-gray-500 hover:cursor-pointer">
                Home
              </span>
            </li>
            <li className="mb-2">
              <span className="hover:text-gray-500 hover:cursor-pointer">
                Products
              </span>
            </li>
            <li className="mb-2">
              <span className="hover:text-gray-500 hover:cursor-pointer">
                Services
              </span>
            </li>
            <li className="mb-2">
              <span className="hover:text-gray-500 hover:cursor-pointer">
                Contact
              </span>
            </li>
          </ul>
        </div>

        {/* Additional Links */}
        <div className="mb-6">
          <h2 className="text-lg font-samibold mb-4">More Links</h2>
          <ul className="list-none">
            <li className="mb-2">
              <span className="hover:text-gray-500 hover:cursor-pointer">
                Blog
              </span>
            </li>
            <li className="mb-2">
              <span className="hover:text-gray-500 hover:cursor-pointer">
                Careers
              </span>
            </li>
            <li className="mb-2">
              <span className="hover:text-gray-500 hover:cursor-pointer">
                FAQ
              </span>
            </li>
            <li className="mb-2">
              <span className="hover:text-gray-500 hover:cursor-pointer">
                Support
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className=" mb-6">
          <h2 className="text-lg font-samibold mb-4">Contact Us</h2>
          <p className="text-sm mb-2">Email: contact@applestore.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
