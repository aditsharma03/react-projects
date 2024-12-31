import { NavLink } from "react-router-dom"



const Header = ()=>{

    return (
        <>
            <div className="py-2 h-20 w-dvw bg-yellow-500 flex items-center justify-around font-bold duration-75 text-slate-900 text-lg">
                <div className="flex items-center mx-2   ">
                    <NavLink  to={"/"} className={({isActive})=> ` duration-75 ${ isActive? "text-2xl tracking-widest border-b-2 border-black " : "" }`}>home</NavLink>
                </div>
                <div className="flex items-center mx-2   ">
                    <NavLink to={"/browser"} className={({isActive})=> `duration-75 ${ isActive? "text-2xl tracking-widest border-b-2 border-black  " : "" }`}>browser</NavLink>
                </div>
                <div className="flex items-center mx-2   ">
                    <NavLink to={"/about"} className={({isActive})=> `duration-75 ${ isActive? "text-2xl tracking-widest border-b-2 border-black  " : "" }`}>about</NavLink>
                </div>
            </div>
        </>
    )
}


export default Header;
