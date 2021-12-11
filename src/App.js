import { Table } from "react-bootstrap";
import TableRow from "./Components/TableRow";
import axios from "axios";
import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import header from "./Images/starwarsheaderApi.png";
import './App.css';

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [submitBoxValue, setSubmitBoxValue] = useState("");

  useEffect(() => {
    const getCharacters = () => {
      axios.get("https://swapi.dev/api/people/").then((response) => {
        setCharacterList(response.data.results);
        const pages = Math.ceil(response.data.count / 10);
        setPageCount(pages); 
      })
    }
    getCharacters();
  }, [])

  const onPageClick = (e, pageNum) => {
    e.preventDefault();
    axios.get(`https://swapi.dev/api/people/?page=${pageNum}`).then((response) => {
      setCharacterList(response.data.results);
    }); 
  }

  const pushedSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.dev/api/people?search=${submitBoxValue}`).then((response) => {
      setCharacterList(response.data.results);
    })


  }

  const onInputChange = (e) => {
    setSubmitBoxValue(e.target.value);
  }

  return (
    
      <div className="container">
        <header className="header mt-3">      
          <img src={header} alt="Star Wars API" />
        </header>
        <div className="form-container mt-3">
          <form className="form" onSubmit={pushedSubmit}> {/*handles onSubmit changes, need function to do this */}
            <input className="form-input" placeholder="Use the force" value={submitBoxValue} onChange={onInputChange}/>
            <button className="btn btn-warning ms-3">Search</button>
          </form>
        </div>
        <Table className="mt-3" striped bordered hover variant="dark" id="table-container">
          <thead className="table-head">
            <tr>
              <th>Name</th>
              <th>Birth Year</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Homeworld</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {characterList.map((item) => {
              return <TableRow key={item.name} char={item}/>
            })}
          </tbody>
        </Table>
        <nav className="center">
          <ul className="pagination">
            {[...Array(pageCount)].map((e, index) => {
              return(
                <li className="page-item"><a className="page-link space-gray custom-page-link" href="#" onClick={(e) => onPageClick(e, index+1)}>{index+1}</a></li>
              )
            })}
          </ul>
        </nav>
      </div>
  
  )
}

export default App;

