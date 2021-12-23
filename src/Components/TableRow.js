import React from 'react';
import Homeworld from './Homeworld';
import Species from './Species';

function TableRow({ characterList }) {
  console.log('characterList: ', characterList);
  return characterList.map((character, i) => {
    return (
      <tr key={i}>
        <td>{character.name}</td>
        <td>{character.birth_year}</td>
        <td>{character.height}</td>
        <td>{character.mass}</td>
        <td>
          <Homeworld url={character.homeworld} />
        </td>
        <td>
          <Species speciesUrl={character.species} />
        </td>
      </tr>
    );
  });
}

export default TableRow;
