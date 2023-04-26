import React from 'react'
import { Card, Typography, LinearProgress, Stack } from '@mui/material'
import { makeStyles } from '@mui/styles'

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
            backgroundColor: "#ff8c2f",
        },
    },
}))

const ProblemSolving = () => {
    const classes = useStyles()
  return (
    <div>
      <Card elevation={0} sx={{background:'none'}}>
        <Stack>
            <Typography className={classes.heading} sx={{color:'#ff8c2f'}}>
                65%
            </Typography>
            <LinearProgress value={65} variant='determinate' className={classes.pBar} sx={{background:'#e2dcdc'}}/> 
            <Typography className={classes.subtitle}>
                Problem Solving
            </Typography>
        </Stack>
    </Card>
    </div>
  )
}

export default ProblemSolving
