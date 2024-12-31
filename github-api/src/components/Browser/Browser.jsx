import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const Browser = ()=>{

    const [username, setUsername] = useState("");



    return (
            <div className="overflow-auto h-full w-dvw  flex flex-col items-center justify-center">

                <div className=" mt-10 p-6 flex items-center gap-3">
                    <input
                        type="text"
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                        placeholder="username"

                        className=" w-64 outline-none py-2 px-14 text-center bg-transparent border-b-2 border-yellow-400"
                    />

                    <Link to={`/browser/${username}`}
                        className="py-2 px-4 rounded-md opacity-70 bg-slate-900 hover:bg-slate-700 duration-75 text-white"
                    >
                        search
                    </Link>
                </div>


                <div className="h-2/3">
                    <Outlet username={username} className="" />
                </div>


            </div>
    )
}


export default Browser;
