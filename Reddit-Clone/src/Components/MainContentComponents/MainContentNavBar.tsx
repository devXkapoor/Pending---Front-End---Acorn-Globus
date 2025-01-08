
const MainContentNavBar = () => {
    return (
        <>
            <div className="flex flex-row justify-between border-2 border-orange-500">
                <div className="font-semibold text-2xl text-gray-700 border-2 border-orange-500">Popular</div>
            <div className="flex flex-row gap-2 font-semibold text-xl text-gray-500 border-2 border-orange-500">
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