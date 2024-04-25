import { useState } from 'react'
import axios from 'axios';
import Spinner from './components/Spinner';
import './App.css'
import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import WcIcon from '@mui/icons-material/Wc';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const[isLoading, setIsLoading] = useState(false);
  const[users, setUsers] = useState([]);
  const[selectedUser, setSelectedUser] = useState(null);
  const[open, setOpen] = useState(false);

  
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

  const handleListIndex = (value) => {
    setSelectedUser(users[value]);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
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
              users.map((user, index) => {
                return (
                  <div className='list-user' key={index}>
                    <img src={user.picture.thumbnail}></img>
                    <label>{user.name.title} {user.name.first} {user.name.last}</label>     
                    <IconButton value={index} onClick={(e) => handleListIndex(e.currentTarget.value)} >
                      <LaunchIcon />
                    </IconButton>
                  </div>
                )
              })
            }
          </div>
        }       
      </div> 
      
      {
      selectedUser ?
        

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <div className='user-card-container'>
            <img src={selectedUser.picture.medium} className='user-avatar'></img>
            <label>{selectedUser.name.title} {selectedUser.name.first} {selectedUser.name.last}</label> 
            <HomeIcon /> 
            <label>{selectedUser.location.street.name}{selectedUser.location.street.number}</label>
            <MailOutlineIcon />
            <label>{selectedUser.email}</label>
            <HowToRegIcon />
            <label>{new Date(selectedUser.registered.date).toString()}</label>
            <WcIcon />
            <label>{selectedUser.gender}</label>
            <PhoneIcon />
            <label>{selectedUser.phone}</label>
          </div>
        </Box>
        </Modal>
      :
        null
      }
    </>
  )
}

export default App
