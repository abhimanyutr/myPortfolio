import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

function Bgimage({ heading, text }) {
  return (
    <div
      style={{
        background: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          url("https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: { xs: "60vh", md: "50vh" }, // responsive height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          textAlign: "center",
          color: "#fff",
          px: { xs: 2, md: 0 }, // horizontal padding for small screens
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: "bold",
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontSize: { xs: "1rem", md: "1.5rem" },
            fontWeight: "400",
          }}
        >
          {text}
        </Typography>
      </Stack>
    </div>
  );
}

export default Bgimage;
