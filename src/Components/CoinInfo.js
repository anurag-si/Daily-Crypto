import React, {useState, useEffect} from 'react'
import { CryptoState} from "../CryptoContext";
import { HistoricalChart } from '../config/api';
import axios from 'axios';
import { CircularProgress, makeStyles } from '@material-ui/core';
import {Line} from "react-chartjs-2";

const CoinInfo = (coin) => {
    const [historicData, setHistoricData]= useState();
    const [days,setSays]= useState(1);

    const {currency} = CryptoState();
    const fetchHistoricData = async () =>{
        const {data} = await axios.get(HistoricalChart(coin.id, days, currency));

        setHistoricData(data.prices);
    };

    useEffect(() => {
        fetchHistoricData();
    },[currency,days]);

    const useStyles=makeStyles((theme) =>({
        container:{
            width: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
            padding:40,
            [theme.breakpoints.down("md")]: {
                width: "100%",
                marginTop: 0,
                padding: 20,
                paddingTop: 0,
              },
        }
    }))

    const classes=useStyles();

  return (
      <div>
          
      </div>
  )
}

export default CoinInfo
