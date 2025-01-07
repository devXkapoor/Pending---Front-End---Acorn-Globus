
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
            <div>MainContentCard</div>
            <div>
                {thumbnail}
            </div>
            <div>
                {title}
            </div>
            <div>
                {postedByPic}
            </div>
            <div>
                {postedByName}
            </div>
            <div>
                {postDate}
            </div>
            <div>
                {numComments}
            </div>
            <div>
                {numShare}
            </div>
            <div>
                {numUpVotes}
            </div>
        </>
    )
}

export default MainContentCard