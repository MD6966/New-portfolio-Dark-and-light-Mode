import { Card, Container, Divider, Tab, Tabs, Typography } from '@mui/material'
import { useTheme } from '@mui/styles'
import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import SocialMedia from './components/SocialMedia'
import {makeStyles} from '@mui/styles'
import { useSelector } from 'react-redux'
import Certificates from './components/Certificates'
const useStyles = makeStyles((theme)=> ({
  tab : {
    fontSize:'1.5rem', 
    fontFamily:'Signika Negative', 
    margin:'0px 3rem',
    '&:hover' : {
      color:'#FE3E57'
    }
  }
}))

const About = () => {
  const classes = useStyles()
  const darkMode = useSelector((state)=> state.theme.darkMode)
  console.log(darkMode)
  const [value ,setValue] = React.useState(0)
  const handleTabsChange =(e, value)=> {
      setValue(value)
  }
  const theme = useTheme()
  return (
    <div style={{minHeight:'100vh', padding:'3rem', backgroundImage: darkMode ? 'url("/Assets/background.jpg")' : 'none', 
    backgroundRepeat:'no-repeat', backgroundPosition:'fixed', backgroundSize:'cover'}} id="about">
    <Card elevation={0} sx={{background:'none'}} >
      <Typography variant='h2' style={{fontFamily:'Signika Negative'}}> About Me </Typography>
      {/* <Divider />  */}
    </Card>
    <Container>

    <Tabs 
    centered
    value={value}
    onChange={handleTabsChange}
    TabIndicatorProps={{
      sx: {
        backgroundColor: '#fe3e57',
      },
    }}
    textColor='#000000'
    >
      <Tab label='About'className={classes.tab} />
      <Tab label='Skills' className={classes.tab}/>
      {/* <Tab label='Services'className={classes.tab} /> */}
      <Tab label='Social Media' className={classes.tab} />
      <Tab label='Certificates' className={classes.tab} />



    </Tabs>
    <Divider /> 
    </Container>
    <Container>
      <SwipeableViews
     axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
     index={value}
    >
            {value ===  0 && <AboutMe />}
            {value ===  1 && <Skills />}
            {/* {value ===  2 && <Services />} */}
            {value ===  2 && <SocialMedia />}
            {value ===  3 && <Certificates />}


    </SwipeableViews>
    </Container>
    </div>
  )
}


export default About
