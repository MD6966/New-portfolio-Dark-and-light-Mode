import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import '../../Body/Body.css'

// const StyledBox = styled(Box)(({theme})=>({
    
//     height:'50px', 
//     width:'50px', 
//     background: theme.palette.mode === 'dark' ? '#ffff' : '#e2e2e2', 
//     borderRadius:'10px', 
//     transform:'rotate(45deg)',
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     boxShadow:'2px 2px 5px #000000',
    


// }))
const StyledLink=styled('a')(({theme})=>({
    textDecoration:'none',
    fontSize:'1.25rem',
    fontWeight:'bold',
    color:theme.palette.mode === 'dark' ? '#ffff' : '#000', 
}))

const SocialMediaComponent = (props) => {
    const {name, to, icon, height, classs} = props
  return (
    <div style={{display:'flex', alignItems:'center'}}>
        <div className={classs}>
            <Box sx={{transform:'rotate(-45deg)', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img src={icon} height={height} alt='fb'  /> 
            </Box>
        </div>
        <Box sx={{ml:'1rem'}}>
            <StyledLink href={to}> {name} </StyledLink>
        </Box>
    </div>
  )
}

export default SocialMediaComponent
