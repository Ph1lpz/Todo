
function  Nav(){

    return(
        <header className="w-[70%] mx-auto flex items-center justify-around bg-pink-500 border py-2 shadow-lg rounded-md max-md:mx-0 max-md:w-full ">
            <h1 className="text-3xl font-semibold text-gray-100 bg-pink-700 p-2 border rounded-md shadow-md max-md:text-2xl">Tasks Master</h1>
            <nav className="[&>a]:mx-6 bg-pink-700 border rounded-md p-1 text-gray-100 max-sm:[&>a]:mx-2">
                <a href="#">Home</a>
                <a href="#">timer</a>
                <a href="#">about</a>
            </nav>
        </header>
    )
}


export default Nav