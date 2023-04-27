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
        textAlign:'center'
    },
}))

const SKillsComp = (props) => {
    const {val, title, color, img, height} = props
    const classes = useStyles()
    
  return (
    <div>
      <Card elevation={0} sx={{background:'none'}}>
        <Stack>
            <Typography className={classes.heading} sx={{color:props.color}}>
                <img src={img} alt="logo" height={height} />
            </Typography>
            <LinearProgress value={val} variant='determinate' 
            sx={{ backgroundColor: "#e2dcdc", '& .MuiLinearProgress-barColorPrimary': { backgroundColor: color }}}  /> 
            <Typography className={classes.subtitle}>
             {title}
            </Typography>
        </Stack>
    </Card>
    </div>
  )
}

export default SKillsComp
