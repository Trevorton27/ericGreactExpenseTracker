import { Table } from "react-bootstrap";
import TableRow from "./Components/TableRow";
import axios from "axios";
import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [characterList, setCharacterList] = useState([]);

  const [pageCount, setPageCount] = useState(0);

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

  return (
    
      <div className="container">
        <header className="header mt-3">
          <h1 id="sw-header-title">Star Wars API</h1>
        </header>
        <div className="main-area">
        {/*Have a star wars picture inserted here (src/img) */}
        </div>
        <div className="form-container">
          <form className="form">
            <input className="form-input" placeholder="Use the force"/>
            <button className="btn btn-warning">Search</button>
          </form>
        </div>
        <Table className="mt-3" striped bordered hover variant="dark">
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
        <nav>
          <ul className="pagination">
            {[...Array(pageCount)].map((e, index) => {
              return(
                <li className="page-item"><a className="page-link" href="#" onClick={(e) => onPageClick(e, index+1)}>{index+1}</a></li>
              )
            })}
          </ul>
        </nav>
      </div>
  
  )
}

export default App;

