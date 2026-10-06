import {useState,useEffect} from 'react'

export default function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    async function loadData(){
        const dataPromise = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        const currencyInfo = await dataPromise.json();
        setData(currencyInfo)
    }
}