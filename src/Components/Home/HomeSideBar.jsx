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

 
//  const searchData = [
//   {
//     ben: "পানি  বি. [IPA] বিপরিতার্থক শব্দ - বাংলা [IPA] সমার্থক শব্দ - বাংলা [IPA] ।",
//     eng: "Water n, [IPA] Antonym - [Times New Roman] Synonyms- [Times New Roman]",
//     fre: "l’ eau n pe, f,  Antonym - [Times New Roman] Synonyms- [Times New Roman] ।"
//   },
//   {
//     ben: "ফুল  বি. [IPA] বিপরিতার্থক শব্দ - বাংলা [IPA] সমার্থক শব্দ - বাংলা [IPA] ।",
//     eng: "Flower n, [IPA] Antonym - [Times New Roman] Synonyms- [Times New Roman]",
//     fre: "fleur n f, Antonym - [Times New Roman] Synonyms- [Times New Roman] ।"
//   },
//   {
//     ben: "আকাশ  বি. [IPA] বিপরিতার্থক শব্দ - বাংলা [IPA] সমার্থক শব্দ - বাংলা [IPA] ।",
//     eng: "Sky n, [IPA] Antonym - [Times New Roman] Synonyms- [Times New Roman]",
//     fre: "ciel n m, Antonym - [Times New Roman] Synonyms- [Times New Roman] ।"
//   },
//   {
//     ben: "সূর্য  বি. [IPA] বিপরিতার্থক শব্দ - বাংলা [IPA] সমার্থক শব্দ - বাংলা [IPA] ।",
//     eng: "Sun n, [IPA] Antonym - [Times New Roman] Synonyms- [Times New Roman]",
//     fre: "soleil n m, Antonym - [Times New Roman] Synonyms- [Times New Roman] ।"
//   },
//   // Add more objects as needed...
// ];
const { setData, menuItems, setMenuItems } = useData();

const handleSearch = async () => {
  try {
    const apiUrl = `https://app-ild.onrender.com/api/data/search?bengali_word=${encodeURIComponent(searchTerm)}`;
    
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Update state with API response
    setData(data);
    
    // Set fetched data to inputSearchData state
    setInputSearchData({
      english: data[0].englishWord,
      french: data[0].frenchWord
    });

    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

//slected option
const handleSelect = (selectedMenu) => {
  setSelectedOption(selectedMenu);
 
  switch (selectedMenu) {
    case "chakma":
      setMenuItems ( ["Ampi (𑄜ម্পꯤ): Hello", "Faidah (𑄜𑄫𑄘𑄜): Thank you", "Hakchang (𑄦𑄏𑄌𑄎): How are you?"]);
      break;
    case "marma":
      // **Note:** Be mindful of sharing sensitive Marma terminology publicly.
      // These examples are for illustration purposes only.
      setMenuItems ( ["grijsa (neck)", "krima (stomach)", "dau (eye)"]);
      break;
    case "santali":
      // **Placeholder for Santali words:**
      // You can replace this with actual Santali words if you have a reliable source.
      setMenuItems ( ["Amai (আমায়): Mother","Baha (বহা): Outside", " Marang (মারাং): House", ]);
      break;
    case "mro":
      // **Placeholder for Mro words:**
      // You can replace this with actual Mro words if you have a reliable source.
      setMenuItems ( [" tăkɑu¹³ (forehead)", "nɔr² (mouth)", "kom¹ (back))"]);
      break;
    default:
      setMenuItems ( []);
  }
  // You can also fetch data based on the selected menu
  // Modify this part according to your API structure and logic
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
  onChange={(e) => handleSelect(e.target.value)}
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