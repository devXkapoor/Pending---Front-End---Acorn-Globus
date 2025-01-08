import { FaRedditAlien } from "react-icons/fa6";
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
            <div className="m-1">
                <CiHome
                    className="text-3xl"
                />
            </div>
        </>
    )
}

const PopularIcon = () => {
    return (
        <>
            <div className="m-1">
                <GiNetworkBars
                    className="text-3xl"
                />
            </div>

        </>
    )
}

const AllIcon = () => {
    return (
        <>
            <div className="m-1">
                <TiThSmall
                    className="text-3xl"
                />
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

const UpIcon = () => {
    return (
        <>
            <div className="m-1">
                <LuChevronUp
                    className="text-3xl"
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
                    className="bg-gray-400 text-3xl"
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
                    className="bg-gray-400 text-3xl"
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
                    className="text-3xl"
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
                    className="text-3xl"
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
                    className="text-3xl"
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
    DownIcon,
    UpIcon,
    MailIcon,
    MessageIcon,
    CommentIcon,
    ShareIcon,
    MoreIcon,
} 