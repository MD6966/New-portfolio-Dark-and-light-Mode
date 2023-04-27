import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import AboutFile from '../Files/About.json'
import Lottie from 'react-lottie';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    btn: {
        marginTop:'2rem',
        '&:hover' : {
            background:'#4b4b7f',
            color:'#fff'
        }
    }
}))
const AboutMe = () => {
   const classes = useStyles()
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: AboutFile,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div style={{padding:'3rem'}}>
      <Grid container>
        <Grid item
        xs={6}
        md={6}
        lg={6}
        >
               <Lottie options={defaultOptions}
              height={400}
              width={400}/>
        </Grid>
        <Grid item
        xs={6}
        md={6}
        lg={6}
        >
                <Typography variant='h3' style={{fontFamily:'Signika Negative', fontWeight:'bold'}} gutterBottom>
                Bringing ideas to life through code.
                </Typography>

                <Typography variant='body1'>
                My name is Syed Mudasser Anayat. I am a highly skilled and experienced web developer with a strong foundation in React.js, Node.js, Express.js, 
                and MongoDB. With over 1 year of experience in the industry, I can quickly and effectively bring ideas 
                to life through my exceptional coding abilities. I am a reliable and dedicated professional who constantly seeks ways to improve his skills and contribute to my team's success. 
                If you need a talented web developer who can deliver high-quality solutions, look no further than Mudasser 😍.
                </Typography>
                <Button variant='contained'className={classes.btn} target='_blank' 
                href='https://drive.google.com/file/d/1zsbpLaoA5mu4AqGEDtJaaZ38iqUXPg7a/view?usp=sharing'
                > Download CV</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default AboutMe
