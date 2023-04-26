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
            backgroundColor: "#fe3e57",
        },
    },
}))

const FrontEnd = () => {
    const classes = useStyles()
  return (
    <div>
      <Card elevation={0} sx={{background:'none'}}>
        <Stack>
            <Typography className={classes.heading} sx={{color:'#FE3E57'}}>
                85%
            </Typography>
            <LinearProgress value={85} variant='determinate' className={classes.pBar} sx={{background:'#e2dcdc'}}/> 
            <Typography className={classes.subtitle}>
                Front End Development
            </Typography>
        </Stack>
    </Card>
    </div>
  )
}

export default FrontEnd
