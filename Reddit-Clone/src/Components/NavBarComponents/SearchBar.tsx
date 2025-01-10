import { SearchIcon } from "../CommonComponents/Icons"

const SearchBar = () => {
    return (
        <>
            <div className="flex flex-row justify-center items-center bg-gray-100 h-10 rounded-lg p-2">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Find community or post"
                    className=" bg-gray-100 rounded-lg h-10 w-60 mx-2 p-2 focus:outline-none"
                />

            </div>
        </>
    )
}

export default SearchBar