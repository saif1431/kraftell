import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 ">
      <div className="mx-auto">
        {/* Top section */}


        <div className='bg-[#05132A] text-white py-12 lg:px-12 px-4 flex items-center flex-col lg:flex-row gap-4'>
            <div className='w-70 flex items-center justify-center'>
                  <img className='w-32' src="/logo.png" alt="" />
            </div>
        <div className="flex flex-col md:flex-col gap-4 justify-center items-center  ">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Try Kraftell Today</h2>
            <div className="flex space-x-4 mt-4">
              <button className="bg-white hover:bg-slate-300 text-black lg:px-6 px-4 py-2 rounded-md font-medium">
                Get Started Free
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 px-6 py-2 rounded-md hover:text-black font-medium">
                See How It Works
              </button>
            </div>
          </div>
          <div className=" p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-center">100% Refund Guarantee</h3>
            <p className="text-white text-sm">
              Cancel your annual subscription anytime and get a full refund for the unused period—no questions asked
            </p>
          </div>
        </div>
        </div>


        {/* Links section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8  py-12 lg:px-12 px-6 bg-black text-white">
          <div>
            <h4 className="font-bold  mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400 ">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Our Mission</a></li>
              <li><a href="#" className="hover:text-gray-400">Join the Team</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold  mb-4">For Users</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">How It Works</a></li>
              <li><a href="#" className="hover:text-gray-400">Manufacturers</a></li>
              <li><a href="#" className="hover:text-gray-400">Creators & Product Owners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold  mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Settings</a></li>
            </ul>
          </div>
          <div>
    <h4 className="font-bold mb-4">Language & Region</h4>
    <div className="space-y-4">
      <div>
        {/* <label htmlFor="language" className="block text-sm mb-1">Language</label> */}
        <select 
          id="language" 
          className="w-full bg-white border  rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
      </div>
      
      <div>
        {/* <label htmlFor="region" className="block text-sm mb-1">Region</label> */}
        <select 
          id="region" 
          className="w-full bg-white border  rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          <option value="de">Germany</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="fr">France</option>
          <option value="es">Spain</option>
        </select>
      </div>
    </div>
  </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center  bg-black px-12 py-6 text-white">
          <div className="flex space-x-4">
            <a href="#" className=" hover:text-gray-600"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-600"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-600"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-600"><FaLinkedin /></a>
          </div>
         
        </div>
        <div className=" text-center py-4 bg-black text-white">
            <p>© 2025 Kraftell Technologies. All rights reserved.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;