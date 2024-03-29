import { Box, Grid, Container } from '@mui/material'
import React from 'react'
import SocialMediaComponent from './SocialMediaComponent'
import "../../Body/Body.css"
import { useSelector } from 'react-redux'

const Data = [
  {name:'Github', to:"https://github.com/MD6966", icon:"/Assets/git.png", height:50, class:"social"},
  {name:'LinkedIn', to:"https://www.linkedin.com/in/syed-mudasser/", icon:"/Assets/lk.png", height:40, class:"social"},
  {name:'Facebook', to:"https://www.facebook.com/profile.php?id=100005424466933", icon:"/Assets/fb.png", height:50, class:"social"},
  {name:'YouTube', to:"https://www.youtube.com/channel/UCXEVLnMAMmur_1pvl8F-4-A", icon:"/Assets/yt.png", height:80, class:"yts"},
  {name:'Instagram', to:"https://www.instagram.com/mudasser_jaafri4/", icon:"/Assets/insta.png", height:60, class:"yts"},
  {name:'Gmail', to:"mailto:smudasser36@gmail.com", icon:"/Assets/gmail.png", height:30, class:"yts"},

]

const SocialMedia = () => {
  const darkMode = useSelector((state)=> state.theme.darkMode)
  // console.log(darkMode)
  return (
    <Container>
     <Grid container sx={{overflowY:'hidden'}}>
      {Data.map((val)=> {
        return(
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Box sx={{p:'2rem'}}>
               <SocialMediaComponent name={val.name} to={val.to} icon={val.icon} height={val.height} classs={val.class} /> 
          </Box>
        </Grid>
        )
      })}

     </Grid>
    </Container>
  )
}

export default SocialMedia
