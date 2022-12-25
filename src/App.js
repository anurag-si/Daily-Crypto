import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from '@material-ui/core';
import { minHeight } from '@mui/system';


function App() {
  

  const useStyles= makeStyles(() => ({
    App:{
        backgroundColor: "#A3C3AB",
        color: "white",
        minHeight: "100vh",
    }
  }));

  const  classes=useStyles()
  return (
    <div className={classes.App}>
      
      <Header/>

      <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<Coinpage />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App;
