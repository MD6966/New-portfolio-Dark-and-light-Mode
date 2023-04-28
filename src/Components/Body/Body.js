import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import './Body.css'
import clsx from 'clsx'
import image from '../../assets/MD.png'
import { useSelector } from 'react-redux'
// import FacebookIcon from '@mui/icons-material/Facebook';
import fb from '../../assets/fb.png'
import lk from '../../assets/lk.png'
import yt from '../../assets/yt.png'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import WorkExperience from '../WorkExperience/WorkExperience'
const Body = () => {
  const darkMode = useSelector((state)=> state.theme.darkMode)
  console.log(darkMode)
  return (
    <>
    <div className={darkMode ? 'root' :'root2'} id="home">
      <Grid
      container
      >
        <Grid item
        xl={8}
        lg={8}
        md={8}
        sm={8}
        xs={8}
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}
        >
          <Box className='box'>
      <Typography variant='h1' style={{fontFamily:'lobster'}}>
        I'm <span style={{color:'#FE3E57'}}> Syed</span> Mudasser 
      </Typography>
      <Typography style={{fontSize:'3.5rem',textAlign:'center', fontFamily:'Signika Negative'  }} >
        Full Stack Developer
      </Typography>
      <Box style={{padding: '0px 15%',}}>
      <Divider sx={{bgcolor:'#fe3e57', height:'3px'}} /> 
      </Box>
      <Box style={{display:'flex', justifyContent:'center',}}>
        <div className='fb'>
         <img alt='fb' src={fb} height='50px'/> 
        </div>
        <div className='yt'>
        <img alt='Youtube' src={yt} height='35px'/> 
        </div>
        <div className='linkedin'>
        <img alt='fb' src={lk} height='40px'/> 
        </div>
      </Box>
      </Box>
        </Grid>
        <Grid item
        xl={4}
        lg={4}
        md={4}
        sm={4}
        xs={4}
        style={{display:'flex', justifyContent:'center', alignItems:'center'}}
        >
          <Box >
      <img alt='Image' src={image}  className='img' width="100%" /> 
      </Box>
        </Grid>
      </Grid>
      
      
    </div>
    <About /> 
    <WorkExperience />
    <Contact />
    <Footer />  
    </>
  )
}

export default Body
