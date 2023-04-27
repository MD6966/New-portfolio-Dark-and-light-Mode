import { Card, Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import SKillsComp from './SkillsComponent/SKillsComp'
const useStyles = makeStyles((theme)=> ({
    heading: {
        fontSize:'6rem',
        fontWeight:800,
        fontFamily:'Signika Negative',
        textAlign:'center'

    },
    subtitle: {
        marginTop:'1rem',
        fontFamily:'Signika Negative',
        fontSize:'1.35rem',
        // textAlign:'center'
    },
    pBar: {
        "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#fe3e57",
        },
    },
}))
const Skills = () => {
    const classes = useStyles()
  return (
    <div style={{padding:'3rem'}}>
        <Grid container spacing={5} sx={{mb:'2rem'}}>
    <Grid item
    xs={12}
    md={6}
    lg={4}
    >
    <SKillsComp title={"HTML"} val={80} color="#E44D26" img="/Assets/html.png" height="150px"/> 
    </Grid>
    <Grid item
    xs={12}
    md={6}
    lg={4}
    >
    <SKillsComp title={"CSS"} val={70} color="#1673B6" img="/Assets/css.png" height="150px"/> 

    </Grid>
    <Grid item
    xs={12}
    md={6}
    lg={4}
    >
    
    <SKillsComp title={"JavaScript"} val={80} color="#F1BF26" img="/Assets/js.png" height="150px"/> 

    </Grid>
      </Grid>
      <Grid container spacing={5}>
    <Grid item
    xs={12}
    md={6}
    lg={4}
    >
    <SKillsComp title={"React JS"} val={80} color="#00D8FF" img="/Assets/react.png" height="150px"/> 
    </Grid>
    <Grid item
    xs={12}
    md={6}
    lg={4}
    >
     <SKillsComp title={"Material UI"} val={85} color="#007FFF" img="/Assets/mui.png" height="150px"/> 
    </Grid>
    <Grid item
    xs={12}
    md={6}
    lg={4}
    >
     <SKillsComp title={"Node JS"} val={55} color="#8CC84B" img="/Assets/node.png" height="150px"/> 
    </Grid>
      </Grid>
    </div>
  )
}

export default Skills
