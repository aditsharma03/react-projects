


const About = ()=>{
    return (
        <>
            <div className=" flex flex-col md:flex-row lg:flex-row p-10 items-center justify-evenly">
            <div className="m-5 md:w-2/5 lg:w-2/5 text-justify">
                This React JS app connects to the GitHub API to display a user's repositories. It allows users to input a GitHub username, fetching the repository data dynamically. The app showcases repository names, descriptions, and other key details in a clean, user-friendly interface. It leverages React's state management to handle API responses and render content efficiently. Additionally, it handles errors gracefully, such as when a user inputs an invalid GitHub username.
            </div>
                <img 
                    className="h-32 w-48 md:h-60 md:w-80"
                    src="https://plus.unsplash.com/premium_photo-1661962655543-b88aafe382e9?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

        </>
    )
}


export default About;
