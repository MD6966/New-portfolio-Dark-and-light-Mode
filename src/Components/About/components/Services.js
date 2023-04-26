import { Card, Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductDesign from './ServicesComponent/ProductDesign'
import WebDesign from './ServicesComponent/WebDesign'

const Services = () => {
  
    return (
    <div style={{padding:'3rem'}}>
      <Grid container spacing={5}>
    <Grid item
    xs={6}
    md={6}
    lg={6}>
            <ProductDesign />
    </Grid>
    <Grid item
    xs={6}
    md={6}
    lg={6}>
           <WebDesign /> 
    </Grid>
    <Grid item
    xs={6}
    md={6}
    lg={6}>
          
    </Grid>
    <Grid item
    xs={6}
    md={6}
    lg={6}>
         
    </Grid>
      </Grid>
      
    </div>
  )
}

export default Services
