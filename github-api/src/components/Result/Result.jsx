import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Result = ({className})=>{


    const data = useLoaderData();



    /*
    const [data, setData] = useState({});


    useEffect(()=>{

        const getData = async ()=>{

                const response = await fetch(url+username);
                const data = await response.json();

                setData(data);

        }

        if( username !== "" ){
            getData();
        }

    }, [])

    */


    return (
            <div className="p-8 overflow-auto border-2 border-yellow-400 h-full w-dvw ">
                {
                    (data.status === "404" )? "invalid username" : <Card data={data} />
                }
            </div>
    )
}

export default Result;
