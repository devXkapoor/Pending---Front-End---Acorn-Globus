
const SideBarCard = ({ title, data }) => {
    return (
        <>
            <div className="flex flex-col p-2 m-2">
                <div className="flex flex-row justify-between font-semibold text-sm p-2 pb-0">
                    <div
                        className=" text-gray-800">
                        {title}
                    </div>
                    <div
                        className=" text-gray-400">
                        All
                    </div>
                </div>
                <div className="p-1">
                    {
                        data.map((obj) => {
                            return (
                                <>
                                    <div className="flex flex-row gap-2 justify-between text-sm p-2">
                                        <div className="flex flex-row gap-1 justify-start">
                                            <div>{obj.subredditPic}</div>
                                            <div className="font-semibold">
                                                {obj.subredditName}
                                            </div>
                                        </div>
                                        <div>{obj.subredditNotificationCount}</div>
                                    </div>
                                </>
                            )
                        })

                    }
                </div>
            </div >
        </>
    )
}

export default SideBarCard