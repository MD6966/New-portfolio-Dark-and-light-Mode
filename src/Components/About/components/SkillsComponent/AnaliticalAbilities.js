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
            backgroundColor: "#F1F965",
        },
    },
}))


const AnaliticalAbilities = () => {
  const classes = useStyles()
  return (
    <div>
      <Card elevation={0} sx={{background:'none'}}>
        <Stack>
            <Typography className={classes.heading} sx={{color:'#F1F965'}}>
                45%
            </Typography>
            <LinearProgress value={45} variant='determinate' className={classes.pBar} sx={{background:'#e2dcdc'}}/> 
            <Typography className={classes.subtitle}>
                Back End Development
            </Typography>
        </Stack>
    </Card>
    </div>
  )
}

export default AnaliticalAbilities
