import { AppBar, Box, Button, Switch, Toolbar, Typography, FormControlLabel, Hidden, Drawer, Avatar, Stack, Divider } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toogleTheme } from '../../store/Slice'
import { styled } from '@mui/material/styles';
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link';
import bg from '../../assets/grad.webp'
import MD from '../../assets/MD.png'
import FB from '../../assets/fb.png'
import IK from '../../assets/lk.png'
import YT from '../../assets/yt.png'
const Header = () => {
  const MUISwitch = styled(Switch)(({theme})=> ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }))
  const darkMode = useSelector((state)=> state.theme.darkMode)
  const [checked, setChecked]= useState(darkMode)
  const dispatch = useDispatch()
  const [openDrawer, setOpenDrawer]= useState(false)
  const handleDrawerOpen =() => {
    setOpenDrawer(!openDrawer)
  }
  const handleDrawerClose =() => {
    setOpenDrawer(false)
  }
  const handleChange= (e) => {
    setChecked(e.target.checked)
    dispatch(toogleTheme())
  }

  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar style={{justifyContent:'space-between'}}>
          <Typography className='typo'> Syed Mudasser</Typography>
          <Hidden mdDown>
          <Box style={{width:'40%'}}>
    <Button className={darkMode ? 'btn' : 'btn2'}  > 
         <HashLink to="#home" style={{textDecoration:'none', color: darkMode ? '#ffffff' : '#000000'}} smooth>
          home
         </HashLink>
          </Button>
          <Button className={darkMode ? 'btn' : 'btn2'}  > 
         <HashLink to="#about" style={{textDecoration:'none', color: darkMode ? '#ffffff' : '#000000'}} smooth>
          About
         </HashLink>
          </Button>
          <Button className={darkMode ? 'btn' : 'btn2'}  > 
         <HashLink to="#experience" style={{textDecoration:'none', color: darkMode ? '#ffffff' : '#000000'}} smooth>
          Work Experience
         </HashLink>
          </Button>
          <Button className={darkMode ? 'btn' : 'btn2'}  > 
         <HashLink to="#contact" style={{textDecoration:'none', color: darkMode ? '#ffffff' : '#000000'}} smooth>
          Contact
         </HashLink>
          </Button>
    </Box>
    <FormControlLabel control={<MUISwitch  sx={{m:1}} 
        checked={checked}
        onChange={handleChange}
        />} />
          </Hidden>
          <Hidden mdUp>
            <Button onClick={handleDrawerOpen}>
              <MenuIcon />  
            </Button>
          </Hidden>
            
        </Toolbar>
      </AppBar>
      <Drawer  open={openDrawer} variant='temporary' onClose={handleDrawerClose}
      PaperProps={{sx: { background:'rgba(0,0,0)',}}}
      >
        <Box style={{backgroundImage: `url(${bg})`, color:'#000', height:'25%', padding:'5%',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      boxShadow: '0 5px 20px -2px #FE3E57 '
      }}>
        <Stack direction='row' spacing={2}>
          <Avatar src={MD} style={{backgroundColor:'#ffffff', height:'70px', width:'70px'}} />
          <Stack>
          <Typography variant='h6' style={{color:'#FE3E57', fontFamily:'lobster'}}> Syed Mudasser </Typography>
        <Divider /> 
        <Box style={{display:'flex', marginTop:'5%'}}>

        <Avatar style={{height:'20px', width:'20px', marginLeft:'3%',}} src={FB} />
        <Avatar style={{height:'20px', width:'20px',marginLeft:'3%'}} />
        <Avatar style={{height:'20px', width:'20px',marginLeft:'3%'}} />
        <Avatar style={{height:'20px', width:'20px',marginLeft:'3%'}} />

        </Box>
          </Stack>
        </Stack>

        </Box>
        
      </Drawer>
    </div>
  )
}

export default Header
