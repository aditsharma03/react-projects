import { Link } from "react-router-dom";

const Card = ({data})=>{
    return (
        <>
            <div className="h-full p-4 overflow-auto rounded-lg">
                <div className="p-8  flex flex-col md:flex-row lg:flex-row items-center justify-start ">
                    <div>
                        <img src={data.avatar_url} className=" h-48 w-48 rounded-2xl" />
                    </div>
                    <div className="p-8 font-bold">
                        <div>
                            {data.name}
                            <p>{data.bio}</p>
                        </div>
                        <div className=" w-full m-1 py-2 flex items-center justify-center gap-4">
                            <div>
                                followers: {data.followers}
                            </div>
                            <div>
                                following: {data.following}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className=" p-2 m-2 w-full text-center font-bold">Repositories:</p>
                    <ul>
                        {
                            data.repos.map( (repo) => (

                                <li className=" p-2 odd:bg-slate-100" >
                                <Link to={repo.html_url} className=" flex items-center justify-between ">
                                    <span>
                                        {repo.name}                                    </span>
                                    <span>
                                        {repo.language}
                                    </span>
                                </Link>
                                </li>
                            ) )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Card;
