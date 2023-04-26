import { Avatar, Card, Divider, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import LanguageIcon from '@mui/icons-material/Language';


const WebDesign = () => {
    const darkMode = useSelector((state)=> state.theme.darkMode)
  return (
    <Card elevation={0} sx={{background:'none', display:'flex', alignItems:'center'}}>
            <Avatar sx={{height:'100px', width:'100px', background:'#FE3E57'}}>
                <LanguageIcon sx={{fontSize:'4rem', color:'#fff'}} /> 
                </Avatar> 
            <Typography variant='h3' className='glow'>
                Web Design
                <Divider sx={{bgcolor:'#fe3e57', height:'3px', mt:'0.5rem'}}/> 
            </Typography>
            </Card>
  )
}

export default WebDesign
