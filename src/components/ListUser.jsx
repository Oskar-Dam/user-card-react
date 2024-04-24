/* eslint-disable react/prop-types */
import LaunchIcon from '@mui/icons-material/Launch';
import { IconButton } from '@mui/material';

function ListUser(props) {
    const{picture:{thumbnail}, name:{title,first, last}} = props.data;
    const index = props.index;
    const handleClick = (value) => {
        console.log(value);
    };
    
  return (
    <div className='list-user'>
        <img src={thumbnail}></img>
        <label>{title} {first} {last}</label>     
        <IconButton value={index} onClick={(e) => handleClick(e.currentTarget.value)} >
            <LaunchIcon />
        </IconButton>
    </div>
  )
}

export default ListUser