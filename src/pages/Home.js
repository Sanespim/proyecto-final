import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Home = ()=> {
  const {user, isAuthenticated,isLoanding} = useAuth0();

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