
const NavBar = () => {
    return (
        <>
            <div className="border-2 border-orange-500 h-14">
                <ThemeButton />
                <RedditButton />
                <HomeButton />
                <PopularButton />
                <AllButton />
                <SearchBar />
                <CreatePostButton />
                <MessagesButton />
                <MailButton />
                <ProfileButton />
            </div>
        </>
    )
}

export default NavBar