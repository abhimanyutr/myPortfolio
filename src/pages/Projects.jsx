import React from 'react'
import Bgimage from '../components/Bgimage'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import { motion } from "framer-motion";

import {Chip} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";


import TravelWeb from '../assets/TravelWeb.png'; 

function Projects() {




  return (
  <div style={{backgroundColor:"#212121aa"}}> <Bgimage heading='PROJECTS' text='Some of my most recent works'/>
  
  <Stack
  direction="column"
  spacing={8}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    marginY:"30px"
  }}
>


<Stack
  direction={{ xs: "column", md: "row" }}
  spacing={8}
  sx={{
    justifyContent: "space-between",
    alignItems: "center",
  }}
><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={TravelWeb}
        title="Travel"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Travel Website
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      
      </CardContent>

      <Stack sx={{padding:"10px"}} direction="row"  gap={1} flexWrap="wrap">
{["HTML", "CSS", "Bootstrap"].map(
(s) => (
<Chip sx={{backgroundColor:"#00e0f432",fontWeight: 'bold'}} key={s} label={s} />
)
)}
</Stack>

      <CardActions sx={{padding:"20px"}}>
        <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }}
> <Button size="small" variant="outlined" endIcon={<LaunchIcon />} component="a" href={"https://abhimanyutr.github.io/Travel-Blog-Website/"} target="_blank">
          Live
        </Button>
        <Button size="small" variant="text" endIcon={<GitHubIcon />} component="a" href={"https://github.com/abhimanyutr/Travel-Blog-Website"} target="_blank">
          Code
        </Button></Stack>
       
        
      </CardActions>
    </Card>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image='src/assets/MovieSearch.png'
        title="MovieSearch"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Movie Search
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      
      </CardContent>

      <Stack sx={{padding:"10px"}} direction="row"  gap={1} flexWrap="wrap">
{["HTML", "CSS","Tailwind" ,"JavaScript"].map(
(s) => (
<Chip sx={{backgroundColor:"#00e0f432",fontWeight: 'bold'}} key={s} label={s} />
)
)}
</Stack>

      <CardActions sx={{padding:"20px"}}>
        <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }}
> <Button size="small" variant="outlined" endIcon={<LaunchIcon />} component="a" href={"https://movie-search-six-opal.vercel.app/"} target="_blank">
          Live
        </Button>
        <Button size="small" variant="text" endIcon={<GitHubIcon />} component="a" href={"https://github.com/abhimanyutr/Movie-Search"} target="_blank">
          Code
        </Button></Stack>
       
        
      </CardActions>
    </Card>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="src/assets/ToDoList.png"
        title="ToDoList"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          To-Do List 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      
      </CardContent>

      <Stack sx={{padding:"10px"}} direction="row"  gap={1} flexWrap="wrap">
{["HTML", "CSS", "JavaScript","Tailwind" ].map(
(s) => (
<Chip sx={{backgroundColor:"#00e0f432",fontWeight: 'bold'}} key={s} label={s} />
)
)}
</Stack>

      <CardActions sx={{padding:"20px"}}>
        <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }}
> <Button size="small" variant="outlined" endIcon={<LaunchIcon />} component="a" href={"https://abhimanyutr.github.io/TO-DO-LIST/"} target="_blank">
          Live
        </Button>
        <Button size="small" variant="text" endIcon={<GitHubIcon />} component="a" href={"https://github.com/abhimanyutr/TO-DO-LIST"} target="_blank">
          Code
        </Button></Stack>
       
        
      </CardActions>
    </Card>



    </Stack>

  <Stack
  direction= {{ xs: "column", md: "row" }}
  spacing={8}
  sx={{
    justifyContent: "space-between",
    alignItems: "center",
  }}
> 
    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="src/assets/carDetails.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Car Details Log
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      
      </CardContent>

      <Stack sx={{padding:"10px"}} direction="row"  gap={1} flexWrap="wrap">
{["HTML", "CSS", "JavaScript","Tailwind" ].map(
(s) => (
<Chip sx={{backgroundColor:"#00e0f432",fontWeight: 'bold'}} key={s} label={s} />
)
)}
</Stack>

      <CardActions sx={{padding:"20px"}}>
        <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }}
> <Button size="small" variant="outlined" endIcon={<LaunchIcon />} component="a" href={"https://car-log-pi.vercel.app/"} target="_blank">
          Live
        </Button>
        <Button size="small" variant="text" endIcon={<GitHubIcon />} component="a" href={"https://github.com/abhimanyutr/Car-Log"} target="_blank">
          Code
        </Button></Stack>
       
        
      </CardActions>
    </Card><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="src/assets/EventManage.png"
        title="Event Management"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Event-Management Website
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      
      </CardContent>

      <Stack sx={{padding:"10px"}} direction="row"  gap={1} flexWrap="wrap">
{["HTML", "CSS", "Tailwind" ].map(
(s) => (
<Chip sx={{backgroundColor:"#00e0f432",fontWeight: 'bold'}} key={s} label={s} />
)
)}
</Stack>

      <CardActions sx={{padding:"20px"}}>
        <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }}
> <Button size="small" variant="outlined" endIcon={<LaunchIcon />} component="a" href={"https://abhimanyutr.github.io/Event-Management/"} target="_blank">
          Live
        </Button>
        <Button size="small" variant="text" endIcon={<GitHubIcon />} component="a" href={"https://github.com/abhimanyutr/Event-Management"} target="_blank">
          Code
        </Button></Stack>
       
        
      </CardActions>
    </Card><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="src/assets/calculator.png"
        title="calculator"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Calculator
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      
      </CardContent>

      <Stack sx={{padding:"10px"}} direction="row"  gap={1} flexWrap="wrap">
{["HTML", "CSS", "JavaScript"].map(
(s) => (
<Chip sx={{backgroundColor:"#00e0f432",fontWeight: 'bold'}} key={s} label={s} />
)
)}
</Stack>

      <CardActions sx={{padding:"20px"}}>
        <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }}
> <Button size="small" variant="outlined" endIcon={<LaunchIcon />} component="a" href={"https://js-calculator-gamma-six.vercel.app/"} target="_blank">
          Live
        </Button>
        <Button size="small" variant="text" endIcon={<GitHubIcon />} component="a" href={"https://github.com/abhimanyutr/JS-Calculator"} target="_blank">
          Code
        </Button></Stack>
       
        
      </CardActions>
    </Card></Stack> 

<Stack
  direction={{ xs: "column", md: "row" }}
  spacing={8}
  sx={{
    justifyContent: "space-between",
    alignItems: "center",
  }}
><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="src/assets/bank.png"
        title="bank"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bank
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      
      </CardContent>

      <Stack sx={{padding:"10px"}} direction="row"  gap={1} flexWrap="wrap">
{["HTML", "CSS", "Tailwind"].map(
(s) => (
<Chip sx={{backgroundColor:"#00e0f432",fontWeight: 'bold'}} key={s} label={s} />
)
)}
</Stack>

      <CardActions sx={{padding:"20px"}}>
        <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }}
> <Button size="small" variant="outlined" endIcon={<LaunchIcon />} component="a" href={"https://bank-account-theta.vercel.app/"} target="_blank">
          Live
        </Button>
        <Button size="small" variant="text" endIcon={<GitHubIcon />} component="a" href={"https://github.com/abhimanyutr/Bank-Account"} target="_blank">
          Code
        </Button></Stack>
       
        
      </CardActions>
    </Card>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image='src/assets/food.png'
        title="Food Kart"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Food Ordering Website
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      
      </CardContent>

      <Stack sx={{padding:"10px"}} direction="row"  gap={1} flexWrap="wrap">
{["HTML", "CSS"].map(
(s) => (
<Chip sx={{backgroundColor:"#00e0f432",fontWeight: 'bold'}} key={s} label={s} />
)
)}
</Stack>

      <CardActions sx={{padding:"20px"}}>
        <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }}
> <Button size="small" variant="outlined" endIcon={<LaunchIcon />} component="a" href={"https://abhimanyutr.github.io/Food-Ordering-Website/"} target="_blank">
          Live
        </Button>
        <Button size="small" variant="text" endIcon={<GitHubIcon />} component="a" href={"https://github.com/abhimanyutr/Food-Ordering-Website"} target="_blank">
          Code
        </Button></Stack>
       
        
      </CardActions>
    </Card>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="src/assets/craft.png"
        title="Craft"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Craft Selling Website
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      
      </CardContent>

      <Stack sx={{padding:"10px"}} direction="row"  gap={1} flexWrap="wrap">
{["HTML", "CSS","Tailwind" ].map(
(s) => (
<Chip sx={{backgroundColor:"#00e0f432",fontWeight: 'bold'}} key={s} label={s} />
)
)}
</Stack>

      <CardActions sx={{padding:"20px"}}>
        <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-start",
    alignItems: "flex-end",
  }}
> <Button size="small" variant="outlined" endIcon={<LaunchIcon />} component="a" href={"https://craft-selling-website-beige.vercel.app/"} target="_blank">
          Live
        </Button>
        <Button size="small" variant="text" endIcon={<GitHubIcon />} component="a" href={"https://github.com/abhimanyutr/Craft-Selling-Website"} target="_blank">
          Code
        </Button></Stack>
       
        
      </CardActions>
    </Card>



    </Stack>    


</Stack>






  </div>

   

  )
}

export default Projects
