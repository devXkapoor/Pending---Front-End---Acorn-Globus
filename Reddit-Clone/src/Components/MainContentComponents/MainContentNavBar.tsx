
const MainContentNavBar = () => {
    return (
        <>
            <div className="flex flex-row border-2 border-orange-500">
                <div className="text-bold text-2xl border-2 border-orange-500">Popular</div>
                <div className="text-bold text-xl text-gray-400 border-2 border-orange-500">
                    <div>Hot</div>
                    <div>New</div>
                    <div>Controversial</div>
                    <div>Rising</div>
                    <div>Top</div>
                </div>
            </div>
        </>
    )
}

export default MainContentNavBar