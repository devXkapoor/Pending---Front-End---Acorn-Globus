import FilterByTab from "./SideBarComponents/FilterByTab"
import SideBarCard from "./SideBarComponents/SideBarCard"

const SideBar = () => {

    const SideBarCardHeadingArray = [
        {
            title: "FAVORITES",
            data: [
                {
                    subredditName: "r/funymore",
                    subredditNotificationCount: 156,
                    subredditPic: "pic",
                },
                {
                    subredditName: "r/breakingnews",
                    subredditNotificationCount: 12,
                    subredditPic: "pic",
                },
                {
                    subredditName: "r/lovestory",
                    subredditNotificationCount: 0,
                    subredditPic: "pic",
                },
                {
                    subredditName: "r/gamingfun",
                    subredditNotificationCount: 69,
                    subredditPic: "pic",
                },


            ]
        },
        {
            title: "REDDIT FEEDS",
            data: [
                {
                    subredditName: "r/moview",
                    subredditNotificationCount: 0o4,
                    subredditPic: "pic",
                },
                {
                    subredditName: "r/gaming",
                    subredditNotificationCount: 0,
                    subredditPic: "pic",
                },
                {
                    subredditName: "r/pics",
                    subredditNotificationCount: 32,
                    subredditPic: "pic",
                },
                {
                    subredditName: "r/gifs",
                    subredditNotificationCount: 0,
                    subredditPic: "pic",
                },


            ]
        },
        {
            title: "COMMUNITY",
            data: [
                {
                    subredditName: "r/funnymore",
                    subredditNotificationCount: 0,
                    subredditPic: "pic",
                },
                {
                    subredditName: "r/breakingnews",
                    subredditNotificationCount: 0,
                    subredditPic: "pic",
                },
                {
                    subredditName: "r/gaming",
                    subredditNotificationCount: 43,
                    subredditPic: "pic",
                },
                {
                    subredditName: "r/lovestory",
                    subredditNotificationCount: 12,
                    subredditPic: "pic",
                },

            ]
        }
    ]
    return (
        <>
            <div className="border-2 border-orange-500 bg-[#E5EBEE] w-1/4 p-2">
                <FilterByTab />
                {SideBarCardHeadingArray.map((obj) => {
                    return (
                        <>
                            <SideBarCard title={obj.title} data={obj.data} />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default SideBar