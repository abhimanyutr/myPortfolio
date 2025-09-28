import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import "./Home.css"
function Home() {
  return (
    <Box height={700}>
      <Stack
  direction="column"
  spacing={3}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    paddingTop:"15%"
  }}
>
  <h1>Hi, I'm a FullStack Developer</h1>
  <h1>React Developer</h1>
  <Stack spacing={2} direction="row">
    
<Link to={'/projects'}> 
        <Button style={{backgroundColor:"cyan"}} variant="contained">PROJECTS</Button>
  
</Link>      <Link to={'/contact'}><Button style={{border:"1px solid cyan",color:"cyan"}} variant="outlined">CONTACT</Button></Link>
    </Stack>
</Stack>
    </Box>
  )
}

export default Home
