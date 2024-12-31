import { Link } from "react-router-dom";



const Home = ()=>{
    return (
        <>
            <div className="flex flex-col gap-8 items-center justify-center">
                <h1 className="text-8xl" >☻☻☻☻</h1>

                <Link to={"/browser"} >
                <p className="font-bold text-white p-4 bg-slate-900 opacity-70 rounded-md">
                    Start browsing ➡️
                </p>
                </Link>
            </div>
        </>
    )
}


export default Home;


