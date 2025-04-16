import React from "react";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";

function CurrencyDisplay({ currency }) {
  const { data, error, loading } = useCurrencyInfo(currency);

  if (loading) {
    return <p>Loading currency data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Currency Data for {currency}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default CurrencyDisplay;