import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const Data = [
        {src:'/Assets/git.png', to:"", height:"50"},
        {src:'/Assets/lk.png', to:"", height:"30"},
        {src:'/Assets/fb.png', to:"", height:"40"},
        {src:'/Assets/insta.png', to:"", height:"50"},
        {src:'/Assets/yt.png', to:"", height:"60"},
        {src:'/Assets/gmail.png', to:"", height:"20"},

    ]
  return (
    <div >
        <Card elevation={2} sx={{height:'20vh', background:'#000'}} >
            <Typography sx={{textAlign:'center', fontWeight:'bold'}} variant='h3'>
                Follow me here
            </Typography>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                {
                    Data.map((val)=> {
                        return(
                            <Avatar sx={{bgcolor:'transparent', ml:'1rem'}}>
                            <img src={val.src} height={val.height} />
                            </Avatar>
                        )
                    })
                }
                 
            </Box>
            <Typography sx={{textAlign:'center',mt:'1.5rem'}} variant='h6'>
        Copyright © 2022 All rights reserved | Made By Syed Mudasser 
            </Typography>
        </Card>
    </div>
  )
}

export default Footer
