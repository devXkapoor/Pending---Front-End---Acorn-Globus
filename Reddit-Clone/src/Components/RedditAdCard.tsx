import RedditButton from "./NavBarComponents/RedditButton"

const RedditAdCard = () => {
    return (
        <>
            <div className="border-2 border-orange-500">
                <div className="border-2 border-orange-500">
                    <RedditButton />
                </div>
                <div className="border-2 border-orange-500">Advertise on Reddit</div>
                <div className="border-2 border-orange-500"><button>GET STARTED</button></div>
            </div>
        </>
    )
}

export default RedditAdCard