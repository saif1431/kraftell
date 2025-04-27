import React, { useState } from 'react';
import logo from '/logo.png';
import { LuMessageCircle } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from 'react-router-dom';
// import { IoClose } from "react-icons/io5";

function DashBoardNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // This would typically come from your authentication system
  const [userRole, setUserRole] = useState('manufacturer'); // or 'buyer'

  // Manufacturer dashboard links
  const manufacturerLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Search Manufacturers', path: '/searchManufacturers' },
    { name: 'Messages', path: '/manufacturer/orders' },
    { name: 'Payment', path: '/manufacturer/inventory' },
    { name: 'My Profile', path: '/MyProfile' },
    { name: 'MemberShip', path: '/MemberShip' }
  ];

  // Buyer dashboard links
  const buyerLinks = [
    { name: 'Dashboard', path: '/buyer/dashboard' },
    { name: 'Browse Products', path: '/buyer/browse' },
    { name: 'My Orders', path: '/buyer/orders' },
    { name: 'Wishlist', path: '/buyer/wishlist' },
    { name: 'Purchase History', path: '/buyer/history' }
  ];

  // Determine which links to show based on user role
  const links = userRole === 'manufacturer' ? manufacturerLinks : buyerLinks;

  return (
    <div className='flex justify-between items-center bg-white shadow-md px-10 py-4  sticky top-0 z-50'>
      <div className='w-42'>
        <img src={logo} alt="Company Logo" />
      </div>
      
      <div className='flex items-center gap-4'>
        <LuMessageCircle className='text-3xl cursor-pointer hover:text-gray-600' />
        <TfiMenuAlt 
          className='text-3xl cursor-pointer hover:text-gray-600' 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Menu Popup */}
      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-2 mr-4 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          
          <ul className=" ">
            {links.map((link, index) => (
              <li className='bg-white rounded-md shadow-lg border border-gray-200' key={index}>
                <NavLink to={link.path} 
                  className="block px-4 py-4 text-lg text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <div className="border-t border-gray-200 shadow-lg">
            <a 
              href="/logout" 
              className="block text-gray-800 px-4 py-4 text-lg hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashBoardNavbar;