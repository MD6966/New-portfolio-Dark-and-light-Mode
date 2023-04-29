import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useSelector } from 'react-redux'
import Lottie from 'react-lottie';
import ContactFile from '../About/Files/Contact.json'


const useStyles = makeStyles(({
  textField: {
    marginBottom:'1rem'
  }
}))
const Contact = () => {
  const classes = useStyles()
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: ContactFile,
    rendererSettings: {
      
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const darkMode = useSelector((state)=> state.theme.darkMode)
  return (
    <div style={{minHeight:'100vh', backgroundImage:darkMode ? 'url("/Assets/contact_bg.jpg")' : 'none', padding:'3rem'}} id="contact" >
      <Typography variant='h2' style={{fontFamily:'Signika Negative'}}> Contact Me </Typography>
      <Typography variant='h5' style={{fontFamily:'Signika Negative',marginTop:'2rem'}}> Send Your Message here</Typography>
      <Grid container>
        <Grid item
        xs={12}
        sm={12}
        md={8}
        lg={8}
        xl={8}
        sx={{pr:4,mt:1 }}
        
        >
            <TextField variant='outlined' label='Name' fullWidth className={classes.textField}/> 
            <TextField variant='outlined' label='Email' fullWidth className={classes.textField}/>
            <TextField variant='outlined' label='Message' fullWidth multiline rows={8} className={classes.textField}/> 
            <div style={{display:'flex', justifyContent:'center',}}>
            <Button variant='contained'>
              Send Message
            </Button>
            </div>
            
        </Grid>
         
        <Grid item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        sx={{display:'flex',mt:'2rem'}}
        >
          <Box>
          <Divider orientation="vertical">
            OR
            </Divider>
          </Box>
          <Box>
            <Box sx={{mt:'-2rem', ml:'2rem'}}>
          <Lottie options={defaultOptions}
              height={300}
              width={300}/>
              </Box>
              <Typography variant='subtitle' style={{fontFamily:'Signika Negative'}}>
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
              </Typography>
              <Typography variant='h5' style={{fontFamily:'Signika Negative'}}> Call Me: 
              <Typography 
              variant='h5' 
              component='span'
              style={{cursor: 'pointer' }}
              onClick={() => window.location.href = 'tel:+923056012297'}> + 923056012297</Typography> </Typography>

          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
