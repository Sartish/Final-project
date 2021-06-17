import React,{useState} from 'react';

//We will using the hook “useState” to hold our data returned from the API as well as our the data that is returned from the search.


const TopSearches = () => {

// in the fetch we collect all data rendered from the API 
const [allData,setAllData] = useState([]);
const [filteredData,setFilteredData] = useState(allData);

return (
    <div>
        <li>concept</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    
    </div>

)
}