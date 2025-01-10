import RedditButton from "./NavBarComponents/RedditButton"

const RedditAdCard = () => {
    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-end bg-white rounded-md p-6">
                <RedditButton />
                <div className="font-bold text-gray-500 text-sm mb-2">Advertise on Reddit</div>
                <button className="w-full text-red-400 text-lg font-bold rounded-md  p-1 border-2 border-red-400">
                    GET STARTED
                </button>
            </div >
        </>
    )
}

export default RedditAdCard