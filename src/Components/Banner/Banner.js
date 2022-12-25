import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles=makeStyles(() => ({
    banner:{
        
        backgroundImage: "url(./banner.jpg)",
    },
    bannerContent: {
        height:400,
        dispaly: 'flex',
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around"
    },
    tagline: {
        display: 'flex',
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
    }
}))

const Banner = () => {
    const classes=useStyles();
    
  return (  
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
            <Typography 
            variant="h2"
            style={{
                fontWeight:"Bold",
                marginBottom:15,
                fontfamily: "Montserrat",
            }}>
                Daily-Crypto
            </Typography>
            <Typography 
            variant="subtitle2"
            style={{
                alignItems: "center",
                color: "darkgrey",
                textTransform: 'capitalize',
                fontfamily: "Montserrat",
            }}>
                Get All the Info regarding your favourite Crypto Currency
            </Typography>
        </div>
        <Carousel/>
      </Container>  
    </div>
    
  )
}

export default Banner
