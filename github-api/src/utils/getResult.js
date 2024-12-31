
const getResult = async ({params})=>{

    const username = params.username;

    const accounturl = "https://api.github.com/users/";
    const response1 = await fetch(accounturl+username);
    const data = await response1.json();


    if( data.repos_url !== undefined ){
        const reposurl = data.repos_url;
        const response2 = await fetch(reposurl);
        const repos = await response2.json();

        data.repos = repos;
    }

    return data;

}

export default getResult;

