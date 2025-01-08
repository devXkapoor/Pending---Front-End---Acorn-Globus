import { CommentIcon, DownIcon, MoreIcon, ShareIcon, UpIcon } from "../CommonComponents/Icons"

const MainContentCard = ({ thumbnail,
    title,
    postedByPic,
    postedByName,
    postDate,
    numComments,
    numShare,
    numUpVotes }) => {
    return (
        <>
            <div className="flex flex-row border-2 border-gray-500 p-2 m-2 rounded-2xl">
                <div>
                    {thumbnail}
                </div>
                <div className="flex flex-col">
                    <div>
                        {title}
                    </div>
                    <div className="flex flex-row justify-between">
                        <span>
                            Posted by {postedByPic} {postedByName}
                        </span>
                        <span>
                            {postDate}
                        </span>
                    </div>
                </div>
                <div>
                    <span><CommentIcon /> {numComments} Comments</span>
                    <span><ShareIcon /> {numShare} Share</span>
                    <span><MoreIcon /> More</span>
                </div>
                <div className="flex flex-col">
                    <UpIcon />
                    {numUpVotes}
                    <DownIcon />
                </div>
            </div>
        </>
    )
}

export default MainContentCard