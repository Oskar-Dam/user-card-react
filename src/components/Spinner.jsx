import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Spinner() {
  return (
    <div className='spinner-container'>
        <Box sx={{ display: 'flex' }}>
            <CircularProgress size={200} />
        </Box>
    </div>
  );  
}