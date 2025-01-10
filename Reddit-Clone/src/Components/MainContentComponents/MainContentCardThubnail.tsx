interface MainContentCardThumbnailProps {
    thumbnailImage: string;
}

const MainContentCardThumbnail: React.FC<MainContentCardThumbnailProps> = ({
    thumbnailImage = "default-thumbnail.jpg", // Fallback image
}) => {
    return (
        <div className="flex justify-center items-center rounded-xl bg-gray-100 w-32 h-32 overflow-hidden">
            <img
                src={thumbnailImage}
                alt="Post Thumbnail"
                className="object-cover w-full h-full rounded-xl"
                onError={(e) => {
                    e.currentTarget.src = "default-thumbnail.jpg"; // Fallback on error
                }}
            />
        </div>
    );
};

export default MainContentCardThumbnail;
