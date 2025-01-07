import MainContentCard from "./MainContentComponents/MainContentCard"
import MainContentNavBar from "./MainContentComponents/MainContentNavBar"

interface MainContentCardObjectType {
    thumbnail: string;
    title: string;
    postedByPic: string;
    postedByName: string;
    postDate: Date;
    numComments: string;
    numShare: string;
    numUpVotes: string;
}
const MainContent = () => {
    const MainContentCardArray = [

        {
            thumbnail: "abc",
            title: "abc",
            postedByPic: "abc",
            postedByName: "abc",
            postDate: "abc",
            numComments: "abc",
            numShare: "abc",
            numUpVotes: "abc",
        },
        {
            thumbnail: "abc",
            title: "abc",
            postedByPic: "abc",
            postedByName: "abc",
            postDate: "abc",
            numComments: "abc",
            numShare: "abc",
            numUpVotes: "abc",
        },
        {
            thumbnail: "abc",
            title: "abc",
            postedByPic: "abc",
            postedByName: "abc",
            postDate: "abc",
            numComments: "abc",
            numShare: "abc",
            numUpVotes: "abc",
        },
    ]

    return (
        <>
            <div className="border-2 border-orange-500 w-2/4">
                <MainContentNavBar />
                {
                    MainContentCardArray.map((obj) => {
                        return (
                            <>
                                <MainContentCard
                                    thumbnail={obj.thumbnail}
                                    title={obj.title}
                                    postedByPic={obj.postedByPic}
                                    postedByName={obj.postedByName}
                                    postDate={obj.postDate}
                                    numComments={obj.numComments}
                                    numShare={obj.numShare}
                                    numUpVotes={obj.numUpVotes}

                                />
                            </>
                        )
                    })

                }
            </div>
        </>
    )
}

export default MainContent