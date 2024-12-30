import { useId } from "react";


const CurrencyCard = ({
    output=false,
    amount=0,
    amountHandler,
    currency="inr",
    currencyHandler,
    listCurrencies=[],
})=>{

    const idAmount = useId();
    const idCurrency = useId();



    return (
        <div className="px-6 py-8 m-6 bg-slate-200 bg-opacity-90 w-2/3 md:w-1/3 lg:w-1/3 flex flex-col items-center justify-center rounded-md" >
            <div className="mb-4  font-bold text-gray-600 text-sm w-full">
                <p>{(output)?"To":"From"}</p>
            </div>
            <div className="w-full">
                <input 
                    id={idAmount}
                    type="number"
                    value={amount}
                    onChange={ (e) => amountHandler && amountHandler(e.target.value) }

                    disabled={output}

                    className="p-1 mx-4 border-b-2 border-yellow-400 bg-transparent text-xl w-2/4"
                />
                <select
                    id={idCurrency}
                    value={currency}
                    onChange={ (e) => currencyHandler && currencyHandler(e.target.value) }

                    className="p-1 mx-4 border-b-2 border-yellow-400 bg-transparent text-xl w-1/4"
                >
                    {
                        listCurrencies.map((c)=>{
                            return (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )

}

export default CurrencyCard;
