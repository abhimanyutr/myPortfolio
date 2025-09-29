import React from 'react'
import Bgimage from '../components/Bgimage'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Typography, Card, CardContent, Chip } from '@mui/material'
import Grid from '@mui/material/Grid'
function About() {
  return (
<div style={{backgroundColor:"black"}}>
      <Bgimage heading='ABOUT ME' text=""/>
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
  <h2>
    I'm a passionate <strong>FullStack Developer</strong> who specializes in building
    clean, responsive, and user-friendly web applications. I focus on writing
    efficient code, delivering smooth UI experiences, and creating secure digital
    solutions that help businesses grow.
  </h2>
  <Typography sx={{ mt:"10px", fontWeight: 'bold' }} variant='h5'>
  EDUCATION
</Typography>
<Typography variant="body2" sx={{ opacity: 0.8 }}>
  B.Tech in Computer Science – 2025
</Typography>

<Typography sx={{ mt:"10px", fontWeight: 'bold' }} variant='h5'>
  Career Goals
</Typography>
<Typography variant="body2" sx={{ opacity: 0.8 }}>
  Join a product team where I can own features end‑to‑end, mentor peers, and ship impactful user experiences.
</Typography>

<Grid item xs={12} md={4}>
<Card sx={{ borderRadius: 4,backgroundColor:"black",color:"white"}}>
<CardContent>
<Typography sx={{ mt:"10px", fontWeight: 'bold',color:"#00cfebff" }} variant='h5'>
  Skills
</Typography>
<Stack direction="row"  gap={1} flexWrap="wrap">
{["HTML", "Tailwind", "JavaScript","React","Angular" ,"Express","NodeJs","MongoDB", "Python", ].map(
(s) => (
<Chip sx={{backgroundColor:"#00e1ffc9",fontWeight: 'bold'}} key={s} label={s} />
)
)}
</Stack>
</CardContent>
</Card>
</Grid>

  
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
