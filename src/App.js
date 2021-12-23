import CharacterTable from './Components/CharacterTable';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Pagination from './Components/Pagination';

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [submitBoxValue, setSubmitBoxValue] = useState('');

  useEffect(() => {
    const getCharacters = () => {
      axios.get('https://swapi.dev/api/people/').then((response) => {
        setCharacterList(response.data.results);
        const pages = Math.ceil(response.data.count / 10);
        setPageCount(pages);
      });
    };
    getCharacters();
  }, []);

  const onPageClick = (e, pageNum) => {
    e.preventDefault();
    axios
      .get(`https://swapi.dev/api/people/?page=${pageNum}`)
      .then((response) => {
        setCharacterList(response.data.results);
      });
  };

  const pushedSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://swapi.dev/api/people?search=${submitBoxValue}`)
      .then((response) => {
        setCharacterList(response.data.results);
      });
  };

  const onInputChange = (e) => {
    setSubmitBoxValue(e.target.value);
  };

  return (
    <div className='container'>
      <Header />
      <SearchBar
        pushedSubmit={pushedSubmit}
        submitBoxValue={submitBoxValue}
        onInputChange={onInputChange}
      />
      <CharacterTable characterList={characterList} />
      <Pagination pageCount={pageCount} onPageClick={onPageClick} />
    </div>
  );
}

export default App;
