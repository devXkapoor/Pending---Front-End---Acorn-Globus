
const SideBarCard = ({ title, data }) => {
    return (
        <>
            <div className="flex flex-col m-2 p-2">
                <div className="flex flex-row justify-between">
                    <div>{title}</div>
                    <div>All</div>
                </div>
                {
                    data.map((obj) => {
                        return (
                            <>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-2 justify-start">
                                        <div>{obj.subredditPic}
                                            
                                        </div>

                                        <div>{obj.subredditName}</div>
                                    </div>
                                    <div>{obj.subredditNotificationCount}</div>
                                </div>
                            </>
                        )
                    })

                }

            </div >
        </>
    )
}

export default SideBarCard