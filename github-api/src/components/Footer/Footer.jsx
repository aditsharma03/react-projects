import { Link } from "react-router-dom";



const Footer = ()=>{
    return (
        <>
            <div className="py-2 h-20 w-dvw bg-yellow-500 flex items-center justify-evenly font-medium duration-200text-slate-900 text-sm">
                <p>Created by - <Link to={'https://github.com/aditsharma03'} className="border-b-2 border-blue-800" >aditsharma03</Link></p>
            </div>
        </>
    )
}


export default Footer;
