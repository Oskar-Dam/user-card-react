import { useState } from 'react'
import axios from 'axios';
import Spinner from './components/Spinner';
import './App.css'
import UserCard from './components/UserCard';
import ListUser from './components/ListUser';

function App() {
  const[isLoading, setIsLoading] = useState(false);
  const[users, setUsers] = useState([]);

  
  const handleClick = () => {
    setIsLoading(true);

    axios.get('https://randomuser.me/api/?results=50')
    .then(function (response) {  
      setUsers(response.data.results);
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .finally(function () {
      setIsLoading(false);
    });
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>USERS CARD REACT</h1>
        </div>
        <div className='button-container'>
          <button className='request-button' onClick={handleClick}>GET USERS</button>
        </div>
        {
          isLoading 
          ?        
            <Spinner />        
          : 
            <div className='user-container'>
            {
              users.map((user, index) => <ListUser 
                                            key={index} 
                                            data={user} 
                                            index={index} 
                                          />)
            }
          </div>
        }       
      </div> 
    </>
  )
}

export default App
