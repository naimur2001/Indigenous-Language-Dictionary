import React from 'react';
import { useData } from '../DataContext/DataContext'; // Import the useData hook

const DataDisplay = () => {
  const { searchData } = useData(); // Access searchData from the context

  return (
    <div>
      {/* Render searchData */}
      {searchData && (
        <div>
    
          {searchData.map((entry, index) => (
        <div key={index} className="my-4">
        
          <div className='flex flex-col gap-10'>
            <p className='font-medium text-xl'>Ben: {entry.ben}</p>
            <p className='font-medium text-xl'>Eng: {entry.eng}</p>
            <p className='font-medium text-xl'>Fre: {entry.fre}</p>
          </div>
        </div>
      ))}
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
