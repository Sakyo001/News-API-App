import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-gray-300 rounded-md p-4 bg-white shadow-md flex items-center space-x-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        <div className="text-gray-700">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
