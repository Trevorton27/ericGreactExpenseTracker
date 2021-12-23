import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Species(prop) {
  const [species, setSpecies] = useState('');

  useEffect(() => {
    if (prop.speciesUrl) {
      axios.get(prop.speciesUrl).then((response) => {
        console.log('species name: ', response.data.name);
        response.data.name
          ? setSpecies(response.data.name)
          : setSpecies('Humanoid');
      });
    }
  }, [prop.speciesUrl]);

  return <div>{species}</div>;
}

export default Species;
