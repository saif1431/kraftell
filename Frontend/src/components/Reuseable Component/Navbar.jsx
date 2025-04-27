import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to='/'>
            <img
              className="h-8 w-auto"
              src={logo}
              alt="Company Logo"
            />
            </NavLink>
          </div>

          {/* Desktop menu on the right */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to='/ManufacturerForm'
              className=" rounded-md text-md  text-black transition-colors"
            >
              Register As Manufacturer
            </NavLink>
            <NavLink to='/BuyerForm'
              className=" rounded-md text-md  text-black  transition-colors"
            >
              Register As Buyer
            </NavLink>
            <NavLink to='/login'
              className=" rounded-md text-md  text-black hover:bg-gray-50 transition-colors"
            >
              Login
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-md  text-black "
            >
              Register As Manufacturer
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-md  text-black  mt-1"
            >
              Register As Buyer
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-md text-black mt-1"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;