import { HomeIcon } from "../CommonComponents/Icons"

const HomeButton = () => {
    return (
        <>
            <div className="flex flex-row gap-1 justify-between items-end font-medium hover:text-orange-500 leading-none">
                <HomeIcon />
                <span className=" flex flex-row items-end text-gray-600 text-md pb-[0.8px] hover:text-orange-500">Home</span>
            </div>
        </>
    )
}

export default HomeButton