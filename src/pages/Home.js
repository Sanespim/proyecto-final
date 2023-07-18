import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Axios  from 'axios';
import { useEffect, useState } from 'react';


const Home = ()=> {
  const {user, isAuthenticated,isLoanding} = useAuth0();
const key = process.env.REACT_APP_KEY;
const headers= {
  'X-Api-Key': key
}
const nombre = 'Michael Jordan';
const url = process.env.REACT_APP_URL_APP+nombre;
useEffect (()=>{
  Axios.get (url, {headers})
  .then (rest=>{console.log(rest.data)}
  )
  .catch(error=>{console.log(error)})
},[]
)
  if (isLoanding) {
    return <div>Cargando...</div>;
  }
  return(
    isAuthenticated && (
      <div>
        <h3>{user.name}</h3>
      </div>
    )
  );
}

export default Home;