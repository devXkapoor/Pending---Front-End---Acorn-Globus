import { PopularIcon } from "../CommonComponents/Icons"

const PopularButton = () => {
    return (
        <>
            <div className="flex flex-row gap-1 justify-between items-end font-medium hover:text-orange-500 leading-none">
                <PopularIcon />
                <span className=" flex flex-row items-end text-gray-600 text-md pb-[0.8px] hover:text-orange-500">Popular</span>
            </div>
        </>
    )
}

export default PopularButton