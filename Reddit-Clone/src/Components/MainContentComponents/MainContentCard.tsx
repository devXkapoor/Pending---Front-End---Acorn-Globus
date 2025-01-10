import { CommentIcon, DownVoteIcon, MoreIcon, ShareIcon, UpVoteIcon } from "../CommonComponents/Icons";
import MainContentCardThubnail from "./MainContentCardThubnail";

interface MainContentCardProps {
    thumbnailImage: string;
    title: string;
    postedByPic: string;
    postedByName: string;
    postDate: string;
    numComments: string | number;
    numShare: string | number;
    numUpVotes: string | number;
}

const MainContentCard: React.FC<MainContentCardProps> = ({
    thumbnailImage = "default-thumbnail.jpg",
    title = "Untitled Post",
    postedByPic = "default-profile-pic.jpg",
    postedByName = "Anonymous",
    postDate = "Unknown Date",
    numComments = 0,
    numShare = 0,
    numUpVotes = 0,
}) => {
    return (
        <div className="flex flex-row border-2 border-gray-200 justify-between p-4 m-2 rounded-2xl">
            {/* Thumbnail */}
            <div className="flex-shrink-0">
                <MainContentCardThubnail thumbnailImage={thumbnailImage} />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow justify-between px-4">
                {/* Title */}
                <div className="text-lg font-semibold">{title}</div>

                {/* Posted By and Date */}
                <div className="flex flex-row justify-between text-sm text-gray-500 mt-2">
                    <span className="flex items-center">
                        <img
                            src={postedByPic}
                            alt={`${postedByName}'s profile`}
                            className="w-6 h-6 rounded-full mr-2"
                        />
                        {postedByName}
                    </span>
                    <span>{postDate}</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col justify-between text-gray-600 text-sm">
                <span className="flex flex-row items-center gap-1">
                    <CommentIcon /> {numComments} Comments
                </span>
                <span className="flex flex-row items-center gap-1">
                    <ShareIcon /> {numShare} Shares
                </span>
                <span className="flex flex-row items-center gap-1">
                    <MoreIcon /> More
                </span>
            </div>

            {/* Upvote/Downvote */}
            <div className="flex flex-col justify-center items-center text-gray-800">
                <UpVoteIcon />
                <span className="text-lg font-semibold">{numUpVotes}</span>
                <DownVoteIcon />
            </div>
        </div>
    );
};

export default MainContentCard;
