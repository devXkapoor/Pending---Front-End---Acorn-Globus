import { CopyrightIcon } from "./CommonComponents/Icons"

const Footer = () => {
    return (
        <>
            <div className="flex flex-col gap-6 fixed bottom-0 right-0 text-gray-600 text-md font-normal w-3/12 p-6">
                <hr className="text-gray-500" />
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-4">
                        <span>. About</span>
                        <span>. Carriers</span>
                        <span>. Press</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span>. Advertise</span>
                        <span>. Help</span>
                        <span>. Blog</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span>. Reddit App</span>
                        <span>. Reddit Gold</span>
                        <span>. Reddit Hits</span>
                    </div>
                </div>
                <hr className="text-gray-500" />
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row  items-center"><CopyrightIcon /> 2020</div>
                    <div className="flex flex-row gap-4">
                        <div>Privacy</div>
                        <div>Terms</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer