import MainContentCard from "./MainContentComponents/MainContentCard"
import MainContentNavBar from "./MainContentComponents/MainContentNavBar"
import SampleThubnailImage from "../assets/Sample-Thubnail.jpg"

interface MainContentCardObjectType {
    thumbnailImage: string;
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
            thumbnailImage: SampleThubnailImage,
            title: "Title",
            postedByPic: "postedByPic",
            postedByName: "postedByName",
            postDate: "postDate",
            numComments: 716,
            numShare: 364,
            numUpVotes: "50K",
        },
        {
            thumbnailImage: SampleThubnailImage,
            title: "Title",
            postedByPic: "postedByPic",
            postedByName: "postedByName",
            postDate: "postDate",
            numComments: 716,
            numShare: 364,
            numUpVotes: "50K",
        },
        {
            thumbnailImage: SampleThubnailImage,
            title: "Title",
            postedByPic: "postedByPic",
            postedByName: "postedByName",
            postDate: "postDate",
            numComments: 716,
            numShare: 364,
            numUpVotes: "50K",
        },
        {
            thumbnailImage: SampleThubnailImage,
            title: "Title",
            postedByPic: "postedByPic",
            postedByName: "postedByName",
            postDate: "postDate",
            numComments: 716,
            numShare: 364,
            numUpVotes: "50K",
        },

    ]

    return (
        <>
            <div className="w-7/12 p-2 m-0">
                <div className="bg-white h-full rounded-md p-2">
                    <MainContentNavBar />
                    {
                        MainContentCardArray.map((obj) => {
                            return (
                                <>
                                    <MainContentCard
                                        thumbnailImage={obj.thumbnailImage}
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
            </div>
        </>
    )
}

export default MainContent