import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Species(prop) {
    const [species, setSpecies] = useState('');

    useEffect(() => {
        if(prop.speciesUrl){
            axios.get(prop.speciesUrl).then((response) => {
            setSpecies(response.data.name);    
            })
        }
    }, [prop.speciesUrl])
    
    return (
        <div>
            {species}
        </div>
    )
}

export default Species;

