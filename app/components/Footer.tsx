'use client';

import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaGithub } from 'react-icons/fa';
import { TbBrandX } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 px-5 sm:px-10">

        {/* Newsletter Subscription */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <p className="text-sm mb-2">Subscribe to our newsletter</p>
          <form className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-gold w-full sm:w-auto"
            />
            <button
              type="submit"
              className="btn btn-primary text-black bg-gold hover:bg-opacity-80 focus:outline-none w-full sm:w-auto sm:max-w-xs"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 text-center sm:text-left justify-center sm:justify-start">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-gold transition" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className="hover:text-gold transition" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={24} className="hover:text-gold transition" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} className="hover:text-gold transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-gold transition" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <TbBrandX size={24} className="hover:text-gold transition" />
          </a>
        </div>

        {/* Contact Number and Copyright */}
        <div className="text-center sm:text-right text-sm sm:text-base">
          <p>Contact: +123-456-7890</p>
          <p>&copy; {new Date().getFullYear()} Folugboji. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
