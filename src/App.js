import { useEffect, useState } from 'react';
import './App.css';
import api from './services/api';

function App() {
  const [user, setUser] = useState();
  console.log(user);
  useEffect(() =>{
    api.get("/users/drebirth")
    .then((response) => setUser(response.data))
    .catch((err) => {
      console.error("ops! erro no metodo")
    });
  }, [])


  return (
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
      

      
    </div>
  );
}

export default App;
