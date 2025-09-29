import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import "./Home.css"
import Contact from './Contact';
import About from './About';
import DownloadIcon from "@mui/icons-material/Download";
function Home() {

  const PROFILE = {
name: "Abhimanyu Rajan",
role: "Full-Stack Developer",
location: "Kerala, India",
email: "abhimanyu@example.com",
socials: {
github: "https://github.com/your-username",
linkedin: "https://www.linkedin.com/in/your-username/",
twitter: "https://twitter.com/your-username",
},
};


  return (
    <div>
      <Box height={700}>
        <Stack
    direction="column"
    spacing={3}
    sx={{
      justifyContent: "center",
      alignItems: "center",
      paddingTop: { xs: "45%", md: "15%" },
  paddingX: { xs: "5%", md: "15%" }
    }}
  >


   



   <h1 style={{ textAlign: "center"}}>Hi, I'm {PROFILE.name}</h1>
<h2 style={{ textAlign: "center", fontWeight: 400, lineHeight: "1.5" }}>
  I build fast, accessible, and delightful web apps. I love crafting clean UIs,
  secure backends, and shipping products end-to-end.
</h2>
    <Stack spacing={2} direction="row">
     <Button
  size="large"
  variant="outlined"
  startIcon={<DownloadIcon />}
  component="a"
  href="/Abhimanyu-ResumeN.pdf" // Path from public folder
  download
  sx={{
    color: "#00c7e1",
    borderColor: "#06e2ffff",
    "&:hover": {
      backgroundColor: "#00aac1f3",
      color: "white",
      borderColor: "#00dcf9ff"
    }
  }}
>
  Download Resume
</Button> 
     <Link to={'/contact'}><Button sx={{backgroundColor: "#00aac1f3","&:hover": {
      backgroundColor: "#00e1fff3"}} } size="large" variant="contained">
Contact
</Button></Link>
      </Stack>
  </Stack>
  
      </Box>

      <Projects/>
      <About/>
       <Contact/>
    </div>
    
    
  )
}

export default Home
