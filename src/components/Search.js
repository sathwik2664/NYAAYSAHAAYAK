// import React, { useState, useEffect } from 'react';

// const SearchBar = () => {
//   const [searchInput, setSearchInput] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/laws?search=${searchInput}`);
//         const data = await response.json();

//         // Ensure that data is an array before updating the state
//         if (Array.isArray(data)) {
//           setSearchResults(data);
//         } else {
//           setSearchResults([]); // Set an empty array if the response is not an array
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     if (searchInput.length > 0) {
//       fetchData();
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchInput]);

//   return (
//     <div>
//       <input
//         type="search"
//         placeholder="Search here"
//         onChange={handleChange}
//         value={searchInput}
//       />

//       <div>
//         {searchResults.map((result, index) => (
//           <div key={index}>
//             <p>Question: {result.question}</p>
//             <p>Answer: {result.answer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;




import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/laws`);
        const data = await response.json();

        if (data.hasOwnProperty(searchInput)) {
          setSearchResults(data[searchInput]);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (searchInput.length > 0) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <div>
        {searchResults.map((result, index) => (
          <div key={index}>
            <p>Question: {result.question}</p>
            <p>Answer: {result.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
