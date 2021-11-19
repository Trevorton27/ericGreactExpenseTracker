import axios from 'axios';
import React, {useState, useEffect} from 'react';

function Homeworld(prop) {
    const [homeworld, setHomeworld] = useState('');
    
    useEffect(() => {
        if(prop.url){
            axios.get(prop.url).then((response) => {
            //console.log(response);
                setHomeworld(response.data.name);        
            })
        }
        
    }, [prop.url])

    return (
        <div>
           {homeworld} 
        </div>
    )
}

export default Homeworld;
