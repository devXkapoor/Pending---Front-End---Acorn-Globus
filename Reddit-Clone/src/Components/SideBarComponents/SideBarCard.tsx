interface SideBarCardProps {
    title: string;
    data: {
        subredditPic?: string;
        subredditName: string;
        subredditNotificationCount?: number;
    }[];
}

const SideBarCard: React.FC<SideBarCardProps> = ({ title, data = [] }) => {
    return (
        <div className="flex flex-col p-2 m-2 bg-white rounded-lg shadow-md">
            <div className="flex flex-row justify-between font-semibold text-sm p-2 pb-0">
                <span className="text-gray-800">{title}</span>
                <span className="text-gray-400 cursor-pointer hover:underline">All</span>
            </div>
            <div className="p-1">
                {data.length > 0 ? (
                    data.map((obj, index) => (
                        <div
                            key={index}
                            className="flex flex-row gap-2 justify-between text-sm p-2 border-b border-gray-200 last:border-none"
                        >
                            <div className="flex flex-row gap-2 items-center">
                                <img
                                    src={obj.subredditPic || "default-pic.jpg"}
                                    alt={`${obj.subredditName} icon`}
                                    className="w-6 h-6 rounded-full bg-gray-200"
                                />
                                <span className="font-semibold">{obj.subredditName}</span>
                            </div>
                            <span className="text-gray-500">{obj.subredditNotificationCount || 0}</span>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm text-center p-2">No data available</p>
                )}
            </div>
        </div>
    );
};

export default SideBarCard;
