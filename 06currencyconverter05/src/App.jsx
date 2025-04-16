import { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  let BackgroundImage =
    "https://images.pexels.com/photos/31527881/pexels-photo-31527881/free-photo-of-dramatic-black-and-white-coastal-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  //console.log("data:", useCurrencyInfo(from));
  
  //console.log("Info:", currencyInfo);

  let options = Object.keys(currencyInfo);
 // console.log("optins:", options);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  //console.log(swap);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  //console.log(convert);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisbaled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer"
            >
              Convert {from.toUpperCase} to {to.toUpperCase}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
