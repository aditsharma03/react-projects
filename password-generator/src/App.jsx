import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react"

function App() {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numbersAllowed, setNumbersAllowed] = useState(false);
    const [charactersAllowed, setCharactersAllowed] = useState(false);


    const generate = useCallback( ()=>{

        let temp = "";

        let allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if( numbersAllowed ) allowed += "0123456789";
        if( charactersAllowed ) allowed += "!@#$%^&*";

        for( let i=0; i<length; i++ ){

            let index = Math.floor( Math.random() * allowed.length );

            temp += allowed.charAt(index);
        }


        setPassword(temp);

    }, [length, numbersAllowed, charactersAllowed, setPassword] );




    useEffect( generate, [length, numbersAllowed, charactersAllowed, generate] );




    return (
        <>
            <div className="h-screen w-screen bg-white flex flex-col justify-center items-center gap-16">
                <div className="py-2 px-6 ">
                    <h1 className="font-mono text-2xl font-bold bg-transparent mb-6">Random Password Generator</h1>
                </div>
                <div className="w-full flex flex-col gap-4 justify-center items-center mt-6">
                    <input id="password" 
                        type="text" 
                        placeholder="password"
                        className="p-2 mb-6 border-b-2 text-center items-center w-1/2 hover:cursor-pointer" 
                        readOnly
                        
                        value={password}
                        onClick={()=>window.navigator.clipboard.writeText(password)}
                    />

                    <div className="px-6 flex gap-2 items-center justify-left w-3/4 md:w-1/2 lg:w-1/2">
                        <label>length ({length})</label>
                        <input id="length"
                            type="range"
                            min={8}
                            max={20}
                            defaultValue={8}

                            value={length}
                            onChange={(e)=>setLength( e.target.value ) }
                        />
                    </div>

                    <div className="px-6 flex gap-2 items-center justify-left w-3/4 md:w-1/2 lg:w-1/2">
                        <label>numbers</label>
                        <input id="numbers"
                            type="checkbox"

                            value={numbersAllowed}
                            onChange={(e)=>setNumbersAllowed( n => !n ) }
                        />
                    </div>

                    <div className="px-6 flex gap-2 items-center justify-left w-3/4 md:w-1/2 lg:w-1/2">
                        <label>special characters</label>
                        <input id="special"
                            type="checkbox"

                            value={charactersAllowed}
                            onChange={(e)=>setCharactersAllowed( c => !c ) }
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default App
