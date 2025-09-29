import React from 'react';
import { FaWhatsapp, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";
import { BsInstagram } from "react-icons/bs";
import { Stack, Box, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ padding: "40px 20px", backgroundColor: "#000", color: "#fff" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        sx={{
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-start" },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1 }}>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <HiMiniHome size={23} /> 
              <Box>
                Thoppil House, Mulakulam North PO.<br />
                Piravom, Ernakulam, Kerala
              </Box>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <FaPhone size={20} /> 
              <Link href="tel:895547329" sx={{ color: "#fff", textDecoration: "none" }}>895 547 329</Link>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <FaWhatsapp size={24} /> 
              <Link href="https://wa.me/8086465983" target="_blank" sx={{ color: "#fff", textDecoration: "none" }}>8086465983</Link>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <FaMailBulk size={20} /> 
              <Link href="mailto:abhimanyurajan396@gmail.com" sx={{ color: "#fff", textDecoration: "none" }}>
                abhimanyurajan396@gmail.com
              </Link>
            </Stack>
          </Stack>
        </Box>

        {/* Right Section */}
        <Box sx={{ flex: 1 }}>
          <Stack direction="column" spacing={2} alignItems={{ xs: "flex-start", md: "flex-end" }}>
            <h2>About Me</h2>
            <p>Hi, I’m <strong>Abhimanyu Rajan</strong>, a Front-end Developer creating responsive and secure websites.</p>

            <Stack direction="row" spacing={3}>
              <Link href="https://linkedin.com" target="_blank" sx={{ color: "#fff" }}><FaLinkedin size={24} /></Link>
              <Link href="https://github.com" target="_blank" sx={{ color: "#fff" }}><FaGithub size={24} /></Link>
              <Link href="https://instagram.com" target="_blank" sx={{ color: "#fff" }}><BsInstagram size={24} /></Link>
              <Link href="https://facebook.com" target="_blank" sx={{ color: "#fff" }}><FaFacebookF size={24} /></Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Bottom copyright */}
      <Box sx={{ textAlign: "center", marginTop: 4, fontSize: "0.9rem", color: "#aaa" }}>
        © {new Date().getFullYear()} Abhimanyu Rajan. All rights reserved.
      </Box>
    </Box>
  )
}

export default Footer;
