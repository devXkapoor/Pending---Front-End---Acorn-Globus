import AllButton from "./NavBarComponents/AllButton"
import CreatePostButton from "./NavBarComponents/CreatePostButton"
import HomeButton from "./NavBarComponents/HomeButton"
import MailButton from "./NavBarComponents/MailButton"
import MessagesButton from "./NavBarComponents/MessagesButton"
import PopularButton from "./NavBarComponents/PopularButton"
import ProfileButton from "./NavBarComponents/ProfileButton"
import RedditButton from "./NavBarComponents/RedditButton"
import SearchBar from "./NavBarComponents/SearchBar"
import ThemeButton from "./NavBarComponents/ThemeButton"

const NavBar = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center h-14 p-2 border-2 border-red-500">
                <div className="flex flex-row justify-between items-center h-14">
                    <ThemeButton />
                    <RedditButton />
                </div>
                <div className="flex flex-row gap-3 justify-between items-center h-14 w-3/5">
                    <HomeButton />
                    <PopularButton />
                    <AllButton />
                    <SearchBar />
                    <CreatePostButton />
                </div>
                <div className=" flex flex-row gap-2 justify-between items-center h-14">
                    <MessagesButton />
                    <MailButton />
                    <ProfileButton />
                </div>
            </div>
        </>
    )
}

export default NavBar