import { Card, Grid, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import {LinearProgress} from '@mui/material'
import FrontEnd from './SkillsComponent/FrontEnd'
import BackEnd from './SkillsComponent/BackEnd'
import ProblemSolving from './SkillsComponent/ProblemSolving'
import AnaliticalAbilities from './SkillsComponent/AnaliticalAbilities'
import CommunicationSkills from './SkillsComponent/CommunicationSkills'
import Creativity from './SkillsComponent/Creativity'
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
    xs={4}
    md={4}
    lg={4}
    >
        <FrontEnd /> 
    
    </Grid>
    <Grid item
    xs={4}
    md={4}
    lg={4}
    >
    <BackEnd /> 
    </Grid>
    <Grid item
    xs={4}
    md={4}
    lg={4}
    >
    <ProblemSolving /> 
    </Grid>
      </Grid>
      <Grid container spacing={5}>
    <Grid item
    xs={4}
    md={4}
    lg={4}
    >
    <AnaliticalAbilities />
    </Grid>
    <Grid item
    xs={4}
    md={4}
    lg={4}
    >
    <CommunicationSkills />
    </Grid>
    <Grid item
    xs={4}
    md={4}
    lg={4}
    >
        <Creativity />
    </Grid>
      </Grid>
    </div>
  )
}

export default Skills
