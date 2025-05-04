import React, { useState } from 'react';
import EscrowPayouts from './EscrowPayouts';
import ComissionsRate from './ComissionsRate';
import TaxonomyEditor from './TaxonomyEditor';
import QualificationCriteria from './QualificationCriteria';
import EmailTemplates from './EmailTemplates';

function SettingHeader() {
  const [activeTab, setActiveTab] = useState('escrow');

  // Sample data for each tab
  const escrowData = [
    {
      id: 1,
      transactionId: 'TX-78945',
      amount: '$1,250.00',
      status: 'Pending',
      date: '2025-05-15'
    },
    {
      id: 2,
      transactionId: 'TX-78946',
      amount: '$850.50',
      status: 'Completed',
      date: '2025-05-14'
    }
  ];

  const commissionRates = [
    {
      id: 1,
      tier: 'Basic',
      rate: '10%',
      threshold: '$0 - $10,000'
    },
    {
      id: 2,
      tier: 'Premium',
      rate: '8%',
      threshold: '$10,001 - $50,000'
    }
  ];

  const taxonomyCategories = [
    {
      id: 1,
      category: 'Electronics',
      subcategories: ['Phones', 'Laptops', 'Accessories']
    },
    {
      id: 2,
      category: 'Home & Garden',
      subcategories: ['Furniture', 'Decor', 'Tools']
    }
  ];

  const qualificationCriteria = [
    {
      id: 1,
      requirement: 'Minimum Sales',
      value: '$5,000/month',
      appliesTo: 'All sellers'
    },
    {
      id: 2,
      requirement: 'Rating',
      value: '4.5+ stars',
      appliesTo: 'Premium sellers'
    }
  ];

  const emailTemplates = [
    {
      id: 1,
      name: 'Welcome Email',
      trigger: 'New registration',
      lastUpdated: '2025-04-20'
    },
    {
      id: 2,
      name: 'Order Confirmation',
      trigger: 'Purchase completed',
      lastUpdated: '2025-05-01'
    }
  ];

  return (
    <div className="">
      {/* Header Tabs */}
      <div className="flex border-b border-gray-200 mb-6 flex-wrap">
        <button 
          onClick={() => setActiveTab('escrow')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'escrow' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Escrow & Payouts
        </button>
        <button 
          onClick={() => setActiveTab('commission')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'commission' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Commission Rates
        </button>
        <button 
          onClick={() => setActiveTab('taxonomy')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'taxonomy' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Taxonomy Editor
        </button>
        <button 
          onClick={() => setActiveTab('qualification')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'qualification' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Qualification Criteria
        </button>
        <button 
          onClick={() => setActiveTab('email')}
          className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === 'email' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-primary hover:text-gray-700'}`}
        >
          Email Templates
        </button>
      </div>

      {/* Tab Content */}
      <div className='bg-white rounded-md p-4'>
        {/* Escrow & Payouts */}
        {activeTab === 'escrow' && <EscrowPayouts data={escrowData} />}
        {activeTab === 'commission' && <ComissionsRate data={commissionRates} />}
        {activeTab === 'taxonomy' && <TaxonomyEditor data={taxonomyCategories} />}
        {activeTab === 'qualification' && <QualificationCriteria data={qualificationCriteria} />}
        {activeTab === 'email' && <EmailTemplates data={emailTemplates} />}
      </div>
    </div>
  );
}

export default SettingHeader;