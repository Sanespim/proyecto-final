import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Axios  from 'axios';
import { useEffect, useState } from 'react';


const Home = ()=> {
  const {user} = useAuth0();
  const [celebrity, setCelebrity] = useState([]);
const key = process.env.REACT_APP_KEY;
const headers= {
  'X-Api-Key': key
}
const nombre = 'Michael Jordan';
const url = process.env.REACT_APP_URL_APP+nombre;
useEffect (()=>{
  Axios.get (url, {headers})
  .then (rest=>{console.log(rest.data)
  setCelebrity(rest.data)
  console.log(celebrity)
})
  .catch(error=>{console.log(error)})
},[]
)
  
  return(
     <div><h3>{user.name}</h3>
     <div>
      {celebrity.map(cel=>{return(
        <Fragment>
        <h4>{cel.name}</h4>
        <h2>{cel.age}</h2>
        {cel.occupation.map(prof=>{
          return (
            <p>{prof}</p>
          )
        }

        )}
        </Fragment>

      )})}
     </div>
     
     </div>


      
    )
}

export default Home;