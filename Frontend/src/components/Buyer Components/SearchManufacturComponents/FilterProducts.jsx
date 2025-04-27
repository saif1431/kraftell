import React, { useState } from 'react';
import countries from 'country-list';

function FilterProducts() {
  // Product types state
  const [productTypes, setProductTypes] = useState([
    { id: 1, name: 'Electronics', checked: false },
    { id: 2, name: 'Textiles', checked: false },
    { id: 3, name: 'Books', checked: false },
    { id: 4, name: 'Plastics', checked: false },
    { id: 5, name: 'Other', checked: false },
  ]);
  const [ManufacturingProcess, setManufacturingProcess] = useState([
    { id: 1, name: '3D Printing', checked: false },
    { id: 2, name: 'Injection Molding', checked: false },
    { id: 3, name: 'CNC Machining', checked: false },
    { id: 4, name: 'Other', checked: false },
  ]);

  // Country selection state
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState('');

  // Get all countries from country-list package
  const allCountries = countries.getData();

  // Filter countries based on search input
  const filteredCountries = allCountries.filter(country =>
    country.name.toLowerCase().includes(countrySearchTerm.toLowerCase())
  );

  const handleCheckboxChange = (id) => {
    setProductTypes(productTypes.map(type => 
      type.id === id ? { ...type, checked: !type.checked } : type
    ));
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.name);
    setIsCountryDropdownOpen(false);
    setCountrySearchTerm('');
  };

  return (
    <div className='p-5 rounded-lg shadow-sm'>
      {/* Product Type Section */}
      <h1 className='text-2xl mb-3'>Product Type</h1>
      <div className='space-y-1 mt-6'>
        {productTypes.map((type) => (
          <div key={type.id} className='flex items-center gap-2'>
            <input
              type="checkbox"
              id={`type-${type.id}`}
              checked={type.checked}
              onChange={() => handleCheckboxChange(type.id)}
              className='h-4 w-4 text-blue-600 rounded focus:ring-blue-500'
            />
            <label htmlFor={`type-${type.id}`} className='ml-2 text-lg'>
              {type.name}
            </label>
          </div>
        ))}
      </div>

      {/* Location Section */}
      <div className='mt-4'>
        <h1 className='text-2xl mb-3'>Location</h1>
        
        <div className="relative mt-4">

          
          {/* Selected country display */}
          <div 
            className="w-full p-2 border border-gray-300 rounded-md cursor-pointer flex justify-between items-center"
            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
          >
            <span>{selectedCountry || "All Countries"}</span>
            <svg 
              className={`w-4 h-4 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {/* Country dropdown */}
          {isCountryDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {/* Search input */}
              <div className="sticky top-0 bg-white p-2 border-b border-gray-300">
                <input
                  type="text"
                  placeholder="All Countries"
                  value={countrySearchTerm}
                  onChange={(e) => setCountrySearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  autoFocus
                />
              </div>
              
              {/* Country list */}
              <div className="divide-y divide-gray-200">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <div
                      key={country.code}
                      className={`p-2 hover:bg-blue-50 cursor-pointer flex items-center ${
                        selectedCountry === country.name ? 'bg-blue-100' : ''
                      }`}
                      onClick={() => handleCountrySelect(country)}
                    >
                      {country.name}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-gray-500">No countries found</div>
                )}
              </div>
            </div>
          )}
        </div>
        
      </div>

<div className='mt-4'>
<h1 className='text-2xl mb-3'>Manufacturing Process</h1>
      <div className='space-y-1 mt-6'>
        {ManufacturingProcess.map((type) => (
          <div key={type.id} className='flex items-center gap-2'>
            <input
              type="checkbox"
              id={`type-${type.id}`}
              checked={type.checked}
              onChange={() => handleCheckboxChange(type.id)}
              className='h-4 w-4 text-blue-600 rounded focus:ring-blue-500'
            />
            <label htmlFor={`type-${type.id}`} className='ml-2 text-lg'>
              {type.name}
            </label>
          </div>
        ))}
      </div>
</div>

    </div>
  );
}

export default FilterProducts;