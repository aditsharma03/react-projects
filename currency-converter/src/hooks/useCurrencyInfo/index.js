import { useState } from "react";
import { useEffect } from "react";



const useCurrencyInfo = (currency)=>{

    const [data, setData] = useState({});


    useEffect( () => {


        const fetchData = async ()=>{

        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        const res = await fetch(url);
        const data = await res.json();

        setData( data[currency] );

        }

        fetchData();

    } , [currency])


    return data;

}


export default useCurrencyInfo;
