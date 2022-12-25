import { AppBar, Toolbar, Container, Typography,  } from '@material-ui/core'
import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core';
import { CryptoState } from '../CryptoContext';
import { useNavigate } from "react-router-dom"

const useStyles= makeStyles(() => ({
  title: {
    flex:1,
    color: "white",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer"
  }
}))

const Header = () => {
  const classes=useStyles()
  const {currency, setCurrency} = CryptoState()
  
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
            <Typography 
              
              className={classes.title}>Daily Crypto</Typography>
            <Select variant="standard" style={{ width:100, height:40, marginLeft:15}}
              value={currency} onChange={(e) => setCurrency(e.target.value )}
            >
          <MenuItem value={"INR"}>INR</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
        </Select>
        </Toolbar>
        
      </Container>
    </AppBar>

  )
}

export default Header
