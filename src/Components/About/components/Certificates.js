import { Grid, Box } from '@mui/material'
import React from 'react'


const Certificates = () => {
  return (
    <div style={{marginTop:'1rem', overflow:'hidden'}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Box component="img"
         src='/Assets/One.jpg'
         alt='certificate'
         sx={{ height: "100%", width: "100%", objectFit: "cover" }}
    />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
    <Box component="img"
         src='/Assets/22.jpg'
         alt='certificate'
         sx={{ height: "100%", width: "100%"}}
    />
  </Grid>
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
    <Box component="img"
         src='/Assets/333.jpg'
         alt='certificate'
         sx={{ height: "100%", width: "100%"}}
    />
  </Grid>
      </Grid>
    </div>
  )
}

export default Certificates
