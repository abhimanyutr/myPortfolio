import Stack from '@mui/material/Stack'
import React from 'react'

function Bgimage(props) {
  return (
   <div
  style={{
    background: `
      linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "50vh",
    width: "100%",
  }}
>
    <Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    paddingTop: {
  md: "11%",
  xs: "30%"
}
  }}
><h1>{props.heading}</h1>
<h2>{props.text}</h2></Stack>
</div>
  )
}

export default Bgimage
