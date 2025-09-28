import React from 'react'
import "./footer.css"
import { FaWhatsapp } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
   
    <div className="footer" style={{ padding: "40px 0", backgroundColor:"black" }}>
  <Stack
    direction={{ xs: "column", md: "row" }}
    spacing={5}
    sx={{
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      color: "white",
    }}
  >
    {/* Left Section */}
    <Box sx={{ flex: 1 }}>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <HiMiniHome size={23} style={{paddingRight:"15px"}} /> 
          Thoppil House, Mulakulam North PO. <br />Piravom, Ernakulam, Kerala
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <FaPhone size={20} style={{paddingRight:"15px"}} /> 895 547 329
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <FaWhatsapp size={24} style={{paddingRight:"15px"}} /> 8086465983
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <FaMailBulk size={20} style={{paddingRight:"15px"}}/> abhimanyurajan396@gmail.com
        </Stack>
      </Stack>
    </Box>

    {/* Right Section */}
    <Box sx={{ flex: 1 }}>
      <Stack direction="column" spacing={2} alignItems={{ xs: "flex-start", md: "flex-end" }}>
        <h1>About</h1>
        <h6>Hai, my name is <strong>ABHIMANYU RAJAN</strong></h6>

        <Stack direction="row" spacing={3}>
          <FaLinkedin />
          <FaGithub />
          <BsInstagram />
          <FaFacebookF />
        </Stack>
      </Stack>
    </Box>
  </Stack>
</div>

  )
}

export default Footer
