/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import WcIcon from '@mui/icons-material/Wc';
import PhoneIcon from '@mui/icons-material/Phone';



function UserCard(props) {
  const {
    picture:{medium},
    name:{title},
    name:{first}, 
    name:{last}, 
    email, 
    location:{street:{number}},
    location:{street:{name}}, 
    registered:{date}, 
    gender, 
    phone}  = props.user;
  return (
    <div className='user-card-container'>
        <img src={medium} className='user-avatar'></img>
        <label>{title} {first} {last}</label> 
        <HomeIcon /> 
        <label>{name}{number}</label>
        <MailOutlineIcon />
        <label>{email}</label>
        <HowToRegIcon />
        <label>{new Date(date).toString()}</label>
        <WcIcon />
        <label>{gender}</label>
        <PhoneIcon />
        <label>{phone}</label>
    </div>
  )
}

export default UserCard