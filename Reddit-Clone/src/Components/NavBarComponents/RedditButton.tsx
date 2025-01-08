import { RedditIcon } from "../CommonComponents/Icons"

const RedditButton = () => {
    return (
        <>
            <div>
                <button>
                    <div className="flex flex-row gap-1 items-center ">
                        <RedditIcon />
                    </div>
                </button>
            </div>
        </>
    )
}

export default RedditButton