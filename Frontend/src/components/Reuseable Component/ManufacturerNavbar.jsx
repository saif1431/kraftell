import React, { useState } from 'react';
import logo from '/logo.png';
import { LuMessageCircle } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from 'react-router-dom';

function ManufacturerNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const ManufacturerLinks = [
    { name: 'Dashboard', path: '/ManufacturerDashboard' },
    { name: 'Edit Profile', path: '/EditProfile' },
    { name: 'Profile Summary', path: '/ProfileSummary' },
    { name: 'Make Payment', path: '/PaymentForm' },
    { name: 'View Matching Projects', path: '/MatchingProject' },
    { name: 'My Orders', path: '' },
    { name: 'Prototype Request', path: '/PendingPrototypes' },
    { name: 'MemberShip', path: '/MemberShip' },
    { name: 'Notifications', path: '/notification' },
  ];

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLogoutModal(true);
    setIsMenuOpen(false);
  };

  const confirmLogout = () => {
    console.log('Manufacturer logged out');
    setShowLogoutModal(false);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className='flex justify-between items-center bg-white shadow-md lg:px-10 px-4 py-4 sticky top-0 z-50'>
      <NavLink to='/ManufacturerDashboard' className='lg:w-42 w-24'>
        <img src={logo} alt="Company Logo" />
      </NavLink>
      
      <div className='flex items-center gap-6'>
        {/* Profile Section */}
       

        {/* Icons */}
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <LuMessageCircle className='text-3xl cursor-pointer hover:text-gray-600' />
            <div className='w-2 h-2 bg-[#FFBB00] absolute left-5 bottom-1 rounded-full'></div>
          </div>
          <TfiMenuAlt 
            className='text-3xl cursor-pointer hover:text-gray-600' 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
         <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src="https://randomuser.me/api/portraits/men/1.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-right">
            <p className="text-sm text-start text-gray-600">Hello</p>
            <p className="font-medium">John Doe</p>
          </div>

        </div>
      </div>

      {/* Menu Popup */}
      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-2 mr-4 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <ul className="">
            {ManufacturerLinks.map((link, index) => (
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
              onClick={handleLogoutClick}
            >
              Logout
            </a>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to logout?</p>
            
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <NavLink to='/ManufacturerDashboard'
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManufacturerNavbar;