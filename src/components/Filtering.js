import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userData from "../usersData/users.json";
import { setFilteredUsers } from '../components/DataSlice'; 

const Filtering = () => {
  const [university, setUniversity] = useState('');
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  const handleUniversityChange = (e) => {
    setUniversity(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleFilterClick = () => {
    const filteredUsers = userData.filter(user => 
      user.univercity.toLowerCase().includes(university.toLowerCase()) &&
      user.dil.toLowerCase().includes(language.toLowerCase()) &&
      user.ülke.toLowerCase().includes(country.toLowerCase())
    );
    dispatch(setFilteredUsers(filteredUsers)); 
  };
  
  return (
    <div>
      <input type="text" placeholder="Üniversite Adı" value={university} onChange={handleUniversityChange} />
      <input type="text" placeholder="Dil" value={language} onChange={handleLanguageChange} />
      <input type="text" placeholder="Ülke" value={country} onChange={handleCountryChange} />

      <button onClick={handleFilterClick}>Filtrele</button>
    </div>
  );
}

export default Filtering;
