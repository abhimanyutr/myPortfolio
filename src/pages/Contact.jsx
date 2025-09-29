import React from 'react'
import Box from '@mui/material/Box';
import { Stack, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Bgimage from '../components/Bgimage';

function Contact() {
  return (
    <div>
      <Bgimage heading='Contact Me' text='Let’s have a chat' />

      <Box 
        className="form" 
        sx={{
          width: "100%",
          minHeight: "500px",
          backgroundColor: "#000000ff",
          display: "flex",
          justifyContent: "center",
          paddingY: "10px",
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" },
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <FormControl fullWidth sx={{ backgroundColor: "#292929ff" }}>
            <InputLabel sx={{ color: "white" }}>Name</InputLabel>
            <OutlinedInput sx={{ color: "white" }} label="Name" />
          </FormControl>

          <FormControl fullWidth sx={{ backgroundColor: "#292929ff" }}>
            <InputLabel sx={{ color: "white" }}>Email</InputLabel>
            <OutlinedInput sx={{ color: "white" }} label="Email" />
          </FormControl>

          <FormControl fullWidth sx={{ backgroundColor: "#292929ff" }}>
            <InputLabel sx={{ color: "white" }}>Subject</InputLabel>
            <OutlinedInput sx={{ color: "white" }} label="Subject" />
          </FormControl>

          <TextField
            label="Message"
            multiline
            rows={4}
            sx={{ backgroundColor: "#292929ff", color: "white" }}
            InputLabelProps={{ style: { color: '#ffffffcc' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />

          <Button
            variant="contained"
            sx={{ backgroundColor: "#03b9ca", color: "black", fontWeight: "bold" }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Contact;
