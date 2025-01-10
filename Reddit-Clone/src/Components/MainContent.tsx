import MainContentCard from "./MainContentComponents/MainContentCard";
import MainContentNavBar from "./MainContentComponents/MainContentNavBar";
import { useState, useEffect } from "react";

interface MainContentCardObjectType {
    thumbnailImage: string;
    title: string;
    postedByPic: string;
    postedByName: string;
    postDate: string; // Changed to string for simplicity
    numComments: string | number;
    numShare: string | number;
    numUpVotes: string | number;
}

const MainContent = () => {
    const [posts, setPosts] = useState<MainContentCardObjectType[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch posts from Reddit API
    useEffect(() => {
        const fetchPosts = async (subreddit: string, sort: string, limit: number) => {
            try {
                const response = await fetch(
                    `https://www.reddit.com/r/${subreddit}/${sort}.json?limit=${limit}`
                );
                const data = await response.json();

                const transformedPosts = data.data.children.map((post: any) => ({
                    thumbnailImage: post.data.thumbnail.startsWith("http")
                        ? post.data.thumbnail
                        : "default-thumbnail-url.jpg", // Fallback thumbnail
                    title: post.data.title,
                    postedByPic: "default-profile-pic.jpg", // Replace with actual image if available
                    postedByName: post.data.author,
                    postDate: new Date(post.data.created_utc * 1000).toLocaleDateString(),
                    numComments: post.data.num_comments,
                    numShare: Math.floor(Math.random() * 100), // Placeholder for shares
                    numUpVotes: post.data.ups,
                }));

                setPosts(transformedPosts);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };

        fetchPosts("popular", "hot", 10);
    }, []);

    return (
        <div className="w-7/12 p-2 m-0 border-2 border-red-500">
            <div className="bg-white h-full rounded-md p-2">
                <MainContentNavBar />
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    posts.map((post, index) => (
                        <MainContentCard
                            key={index}
                            thumbnailImage={post.thumbnailImage}
                            title={post.title}
                            postedByPic={post.postedByPic}
                            postedByName={post.postedByName}
                            postDate={post.postDate}
                            numComments={post.numComments}
                            numShare={post.numShare}
                            numUpVotes={post.numUpVotes}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default MainContent;
