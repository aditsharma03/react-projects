import { useCallback, useState } from "react"
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import CurrencyCard from "./components/CurrencyCard";

function App() {

    const [fromAmount, setFromAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("inr");

    const [toAmount, setToAmount] = useState(0);
    const [toCurrency, setToCurrency] = useState("usd");



    const currencyInfo = useCurrencyInfo(fromCurrency);
    const currencyList = Object.keys(currencyInfo);



    const fnSwap = () => {
        const temp1 = fromAmount;
        setFromAmount(toAmount);
        setToAmount(temp1);

        const temp2 = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp2);
    }



    const fnConvert = useCallback( () => {
            const result = fromAmount * currencyInfo[toCurrency];
            setToAmount(result);
    }, [fromAmount, fromCurrency, currencyInfo])






  return (
    <>
            <div  className=" h-screen w-screen bg-[url('https://images.pexels.com/photos/11285436/pexels-photo-11285436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex flex-col items-center justify-center ">
                <div className="w-full flex flex-col md:flex-row lg:flex-row items-center justify-center">
                        <CurrencyCard
                            amount={fromAmount}
                            amountHandler={setFromAmount}
                            currency={fromCurrency}
                            currencyHandler={setFromCurrency}
                            listCurrencies={currencyList}
                        />
                        <button className="py-2 px-6 border-b-2 border-yellow-400 bg-slate-200 opacity-70 rounded-md font-bold text-4xl"
                        onClick={fnSwap}>
                            ⇆
                        </button>
                        <CurrencyCard 
                            amount={toAmount}
                            amountHandler={setToAmount}
                            currency={toCurrency}
                            currencyHandler={setToCurrency}
                            listCurrencies={currencyList}
                            output
                        />
                </div>
                    <button className="py-4 px-8 border-b-2 border-yellow-400 bg-slate-800 text-white opacity-80 rounded-md" onClick={fnConvert}>Convert</button>
            </div>
    </>
  )
}

export default App;
