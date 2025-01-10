
const MainContentCardThubnail = ({ thumbnailImage }) => {
    return (
        <>
            <div className="flex flex-row justify-center items-center rounded-xl">
                <img src={thumbnailImage} alt="" className="size-32 rounded-xl" />
            </div>
        </>
    )
}

export default MainContentCardThubnail