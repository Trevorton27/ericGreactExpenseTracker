import React from 'react'
import Homeworld from './Homeworld';
import Species from './Species';

function TableRow({char}) {
    return (
        <tr>
            <td>{char.name}</td>
            <td>{char.birth_year}</td>
            <td>{char.height}</td>
            <td>{char.mass}</td>
            <td><Homeworld url={char.homeworld} /></td>
            <td><Species speciesUrl={char.species}/></td>
          </tr>
    )
}

export default TableRow;
