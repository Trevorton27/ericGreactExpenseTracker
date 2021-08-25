import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App(){
  return(
    <div className="container mt-3">
      <header className="header">
        <h1>Star Wars API</h1>
      </header>
      {/* insert star wars picture here */}
      <div className="search-input">
        <form className="">
          <input type="text" placeholder="Use the force" className="input-field"></input>
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
      <thead className="table-header mt-3">
        <tr className="mt-3">
          <th>Name</th>
          <th>Birth Date</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
      </thead>
    </div>
  )
}

export default App;

