import { FaRedditAlien, FaRegCopyright } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import { TiThSmall } from "react-icons/ti";
import { LuChevronDown } from "react-icons/lu";
import { LuChevronUp } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

const RedditIcon = () => {
    return (
        <>
            <div className="flex flex-row gap-2 m-1">
                <div className="rounded-full">
                    <FaRedditAlien
                        className="bg-[#ff4500] text-white rounded-full p-1 text-3xl"
                    />
                </div>
                <span className="font-bold text-xl">reddit</span>
            </div>

        </>
    )
}

const ThemeIcon = () => {
    return (
        <>
            <div className="m-1">
                <MdOutlineLightMode
                    className="rounded-full text-gray-600 text-3xl"
                />
            </div>
        </>
    )
}

const HomeIcon = () => {
    return (
        <>
            <div className="">
                <CiHome
                    className="text-xl"
                />
            </div>
        </>
    )
}

const PopularIcon = () => {
    return (
        <>
            <div className="">
                <GiNetworkBars
                    className="text-xl"
                />
            </div>

        </>
    )
}

const AllIcon = () => {
    return (
        <>
            <div className="">
                <TiThSmall
                    className="text-xl"
                />
            </div>
        </>
    )
}

const SearchIcon = () => {
    return (
        <>
            <div className="">
                <LuSearch className="text-2xl text-gray-400 mx-2" />
            </div>
        </>
    )
}

const DownIcon = () => {
    return (
        <>
            <div className="m-1">
                <LuChevronDown
                    className="text-2xl"
                />
            </div>
        </>
    )
}

const MailIcon = () => {
    return (
        <>
            <div className="m-1">
                <MdMailOutline
                    className="text-2xl"
                />
            </div>
        </>
    )
}

const MessageIcon = () => {
    return (
        <>
            <div className="m-1">
                <FiMessageSquare
                    className="text-2xl"
                />
            </div>
        </>
    )
}

const CommentIcon = () => {
    return (
        <>
            <div className="m-1">
                <FiMessageSquare
                    className="text-2xl"
                />
            </div>
        </>
    )
}

const ShareIcon = () => {
    return (
        <>
            <div className="m-1">
                <IoShareSocialOutline
                    className="text-2xl"
                />
            </div>
        </>
    )
}

const MoreIcon = () => {
    return (
        <>
            <div className="m-2">
                <IoIosMore
                    className="text-2xl"
                />
            </div>
        </>
    )
}

const DownVoteIcon = () => {
    return (
        <>
            <div className="m-1 bg-red-50 rounded-md">
                <LuChevronDown
                    className="text-2xl text-orange-500 w-10"
                />
            </div>
        </>
    )
}

const UpVoteIcon = () => {
    return (
        <>
            <div className="m-1 bg-red-50 rounded-md ">
                <LuChevronUp
                    className="text-2xl text-orange-500 w-10"
                />
            </div>
        </>
    )
}

const CopyrightIcon = () => {
    return (
        <>
            <div className="m-1">
                <FaRegCopyright
                    className="text-md text-gray-400"
                />
            </div>
        </>
    )
}

export {
    RedditIcon,
    ThemeIcon,
    HomeIcon,
    PopularIcon,
    AllIcon,
    SearchIcon,
    DownIcon,
    MailIcon,
    MessageIcon,
    CommentIcon,
    ShareIcon,
    MoreIcon,
    UpVoteIcon,
    DownVoteIcon,
    CopyrightIcon
} 