import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
const WorkExperience = () => {
  const darkMode = useSelector((state)=> state.theme.darkMode)

  return (
    <div style={{height:'100vh', backgroundImage: darkMode ? 'url("/Assets/work_bg.jpg")': 'none', 
    backgroundPosition:'fixed', backgroundRepeat:'no-repeat', backgroundSize:'cover', padding:'3rem'}} id="experience">
      <Typography variant='h2' style={{fontFamily:'Signika Negative'}}> Experience </Typography>
      
    </div>
  )
}

export default WorkExperience
