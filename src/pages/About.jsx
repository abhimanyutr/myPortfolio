import React from 'react'
import Bgimage from '../components/Bgimage'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
function About() {
  return (
<div style={{backgroundColor:"black"}}>
      <Bgimage heading='ABOUT' text='Im a Fullstack Developer'/>
      <Box>
        <Stack
  direction={{ xs: "column", md: "row" }}
  spacing={2}
  sx={{
    justifyContent: "space-around",
    alignItems: "center",
  }}
>


<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingX:"45px",
  }}
>
  <h1>Who Am I?</h1>
  <h2>
    I'm a passionate <strong>React Frontend Developer</strong> who specializes in building
    clean, responsive, and user-friendly web applications. I focus on writing
    efficient code, delivering smooth UI experiences, and creating secure digital
    solutions that help businesses grow.
  </h2>
</Stack>
<Stack
  direction={{ xs: "column", md: "row" }}   // ✅ Correct placement
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    background: {
      md: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(3,185,202,0.7))",
      xs: "linear-gradient(rgba(0,0,0,0.7), rgba(3,185,202,0.7))"
    },
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "50vh",
  }}
>
  <img
    src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/583d97102762923.5f3dda3a7e421.png"
    alt=""
    style={{ borderRadius: "10px", maxWidth: "80%" }}
  />
</Stack>





</Stack>
      </Box>
  
</div>  )
}

export default About
