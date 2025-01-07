
const SideBar = () => {
    return (
        <>
            <div className="border-2 border-orange-500 w-1/4">
                <FilterByTab />
                <SideBarCard title="Favourites" data={FavouritesData} />
                <SideBarCard title="RedditFeeds" data={RedditFeedsData} />
                <SideBarCard title="Community" data={CommunityData} />
            </div>
        </>
    )
}

export default SideBar