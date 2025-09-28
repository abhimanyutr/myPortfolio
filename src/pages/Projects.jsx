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
        image="https://user-images.githubusercontent.com/30984221/181300293-52d6b0a8-cfde-4136-a45f-26fbd8e3dfb7.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton style={{marginRight:"130px"}} aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/website-templates/Tailwind%20CSS%20IT%20Services%20Landing%20Page.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          E-Commerce Website
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
An online store with product browsing, cart system, and user login. Optimized for both desktop and mobile shopping.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton style={{marginRight:"130px"}} aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="https://i.pinimg.com/originals/6f/ba/de/6fbade7bd6e51b34994755df723df931.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton style={{marginRight:"130px"}} aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <Button size="small">Learn More</Button>
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
> <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="https://cdn.dribbble.com/users/11158993/screenshots/20119248/2_4x.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton style={{marginRight:"130px"}} aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="https://cdn.dribbble.com/userupload/3498818/file/original-fd3e76f5a088579442f9902ce58804eb.png?resize=%7Bwidth%7Dx%7Bheight%7D&vertical=center"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton style={{marginRight:"130px"}} aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="https://mir-s3-cdn-cf.behance.net/project_modules/1400/10bc0a133647269.61c2626d337bd.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton style={{marginRight:"130px"}} aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Stack>  

</Stack>

  </div>

   

  )
}

export default Projects
