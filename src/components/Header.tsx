import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-2">Real Estate AI Automation ROI Calculator</h1>
      <p className="text-lg max-w-3xl mx-auto px-4">
        Calculate your potential return on investment when using our AI Lead Generation Automation Service
      </p>
    </header>
  );
};

export default Header;
