import { useState, useEffect } from 'react'

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((req, res) = res.json())
    .then((req, res) => res.setData(res[currency]))
  },[currency])
  return data;
}
  
  
  export default useCurrencyInfo
