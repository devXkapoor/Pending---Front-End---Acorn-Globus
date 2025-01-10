import { CommentIcon, DownVoteIcon, MoreIcon, ShareIcon, UpVoteIcon } from "../CommonComponents/Icons"
import MainContentCardThubnail from "./MainContentCardThubnail"

const MainContentCard = ({ thumbnailImage,
    title,
    postedByPic,
    postedByName,
    postDate,
    numComments,
    numShare,
    numUpVotes }) => {
    return (
        <>
            <div className="flex flex-row border-2 border-gray-200 justify-between p-2 m-2 rounded-2xl">
                <div className="">
                    <MainContentCardThubnail thumbnailImage={thumbnailImage} />
                </div>
                <div className="flex flex-col justify-between">
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
                <div className="flex flex-col justify-between">
                    <span className="flex flex-row items-center"><CommentIcon /> {numComments} Comments</span>
                    <span className="flex flex-row items-center"><ShareIcon /> {numShare} Share</span>
                    <span className="flex flex-row items-center"><MoreIcon /> More</span>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <UpVoteIcon />
                    {numUpVotes}
                    <DownVoteIcon />
                </div>
            </div >
        </>
    )
}

export default MainContentCard