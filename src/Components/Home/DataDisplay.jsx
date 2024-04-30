
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
          <p className='font-medium text-xl'>Ben: <span className='mr-2'>{entry.bengaliWord}</span> <span className='mx-2'>{entry.bengaliIPA}</span> <span className='mx-2'>{entry.bengaliAntonym}</span> <span className='mx-2'>{entry.bengaliSynonyms}</span></p>


              <p className='font-medium text-xl'>Eng: <span className='mr-2'>{entry.englishWord}</span> <span className='mx-2'>{entry.englishIPA}</span> <span className='mx-2'>{entry.englishAntonym}</span> <span className='mx-2'>{entry.englishSynonyms}</span></p>


              <p className='font-medium text-xl'>Fre: <span className='mr-2'>{entry.frenchWord}</span> <span className='mx-2'>{entry.frenchIPA}</span> <span className='mx-2'>{entry.frenchAntonym}</span> <span className='mx-2'>{entry.frenchSynonyms}</span></p>
            </div>
          </div>
       
      ))}
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
