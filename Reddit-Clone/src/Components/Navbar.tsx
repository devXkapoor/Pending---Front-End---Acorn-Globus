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
            <div className="flex flex-row justify-between border-2 border-orange-500 h-14">
                <div className="flex flex-row border-2 border-orange-500 h-14">
                    <ThemeButton />
                    <RedditButton />
                </div>
                <div className="flex flex-row justify-between border-2 border-orange-500 h-14">
                    <HomeButton />
                    <PopularButton />
                    <AllButton />
                    <SearchBar />
                    <CreatePostButton />
                </div>
                <div className="flex flex-row justify-between border-2 border-orange-500 h-14">
                    <MessagesButton />
                    <MailButton />
                    <ProfileButton />
                </div>
            </div>
        </>
    )
}

export default NavBar