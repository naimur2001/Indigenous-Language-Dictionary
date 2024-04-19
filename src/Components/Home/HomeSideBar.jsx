import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { useData } from "../DataContext/DataContext";



const HomeSideBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [inputSearchData,setInputSearchData]=useState({ english: '',
  french: ''})
  

  // const handleSearch1 = () => {
  //   // Perform search based on searchTerm and update searchResult1 state
  //   // This could be an API call or any other search operation
  // };

  // // Function to handle search in the second input bar
  // const handleSelect = () => {
  //   // Perform selection based on selectedOption and update selectedData state
  //   // This could be an API call or any other operation
  // };

 
 const searchData = [
  {
    ben: "পানি  বি. [IPA] বিপরিতার্থক শব্দ - বাংলা [IPA] সমার্থক শব্দ - বাংলা [IPA] ।",
    eng: "Water n, [IPA] Antonym - [Times New Roman] Synonyms- [Times New Roman]",
    fre: "l’ eau n pe, f,  Antonym - [Times New Roman] Synonyms- [Times New Roman] ।"
  },
  {
    ben: "ফুল  বি. [IPA] বিপরিতার্থক শব্দ - বাংলা [IPA] সমার্থক শব্দ - বাংলা [IPA] ।",
    eng: "Flower n, [IPA] Antonym - [Times New Roman] Synonyms- [Times New Roman]",
    fre: "fleur n f, Antonym - [Times New Roman] Synonyms- [Times New Roman] ।"
  },
  {
    ben: "আকাশ  বি. [IPA] বিপরিতার্থক শব্দ - বাংলা [IPA] সমার্থক শব্দ - বাংলা [IPA] ।",
    eng: "Sky n, [IPA] Antonym - [Times New Roman] Synonyms- [Times New Roman]",
    fre: "ciel n m, Antonym - [Times New Roman] Synonyms- [Times New Roman] ।"
  },
  {
    ben: "সূর্য  বি. [IPA] বিপরিতার্থক শব্দ - বাংলা [IPA] সমার্থক শব্দ - বাংলা [IPA] ।",
    eng: "Sun n, [IPA] Antonym - [Times New Roman] Synonyms- [Times New Roman]",
    fre: "soleil n m, Antonym - [Times New Roman] Synonyms- [Times New Roman] ।"
  },
  // Add more objects as needed...
];
  const { setData} = useData()
  const handleSearch = () => {
   
    
    // Filter search result based on searchTerm
    const result = searchData.filter(item =>
      item.ben.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update searchResult state

    setData(result)
      // Extract first word from English and French data
  const english = result.length > 0 ? result[0].eng.split(' ')[0] : '';
  console.log(result[0],"emon")
  const french = result.length > 0 ? result[0].fre.split(' ')[0] : '';

  // Update inputSearchData state
  setInputSearchData({ english, french });
  };
  return (
    <div>
      <div className="flex flex-col h-[600px] w-80 bg-sky-200 p-4">
<div className="input-section mt-16">
<div className="1st-input">
      <label className="text-xl font-semibold" > Bengali</label>
     <span className="flex  items-center ">
     <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // onBlur={handleSearch1}
        className="my-4 px-5 py-3 outline-none rounded-md border border-gray-400 border-none font-semibold"
      />
    {searchTerm ? <FaSearch className="text-3xl ml-2 cursor-pointer" onClick={handleSearch} /> : ""}  
     </span>

     </div>

     <div className="2nd-input">
     <label className="text-xl font-semibold" > English</label>
     <span className="flex  items-center ">
     <input
        type="text"
      readOnly
      value={inputSearchData.english}

        className="my-4 px-5 py-3 outline-none rounded-md border border-gray-400 border-none font-semibold"
      />

     </span>
     </div>

     <div className="3rd-input">
     <label className="text-xl font-semibold" > French</label>
     <span className="flex  items-start ">
     <input
        type="text"
        value={inputSearchData.french}

      readOnly
        className="my-4 px-5 py-3 outline-none rounded-md border border-gray-400 border-none font-semibold"
      />

     </span>
     </div>
     <div className="4th-input">
     <label className="text-xl font-semibold" > Indigenous Language</label>

<span className="flex items-center ">
<select
  value={selectedOption}
  onChange={(e) => setSelectedOption(e.target.value)}
  // onBlur={handleSelect}
  className="my-4 w-60 py-3 outline-none rounded-md border border-gray-400 border-none font-semibold appearance-none focus:outline-none focus:border-blue-500 px-2"
>
  <option className="text-xl m-3 font-medium  " value="">Select a language...</option>
  <option className="text-xl m-3 font-medium  " value="chakma">Chakma</option>
  <option className="text-xl m-3 font-medium  " value="santali">Santali</option>
  <option className="text-xl m-3 font-medium  " value="marma">Marma</option>
  <option className="text-xl m-3 font-medium  " value="mro">Mro</option>
</select>
{selectedOption? <FaSearch className="text-3xl ml-2 cursor-pointer"/> : "" }  
</span>
     </div>
</div>
      </div>
    
    </div>
  )
}

export default HomeSideBar