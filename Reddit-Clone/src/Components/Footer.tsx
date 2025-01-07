
const Footer = () => {
    return (
        <>
            <div className="flex flex-row border-2 border-orange-500"
            // style={{
            //     width: "inherit"
            // }}
            >
                <div className="flex flex-col border-2 border-orange-500">
                    <span>About</span>
                    <span>Carriers</span>
                    <span>Press</span>
                </div>
                <div className="flex flex-col border-2 border-orange-500">
                    <span>Advertise</span>
                    <span>Help</span>
                    <span>Blog</span>
                </div>
                <div className="flex flex-col border-2 border-orange-500">
                    <span>Reddit App</span>
                    <span>Reddit Gold</span>
                    <span>Reddit Hits</span>
                </div>
            </div>
            <div className="flex flex-row justify-between border-2 border-orange-500">
                <div>c 2020</div>
                <div className="flex flex-row border-2 border-orange-500">
                    <div>Privacy</div>
                    <div>Terms</div>
                </div>
            </div>
        </>
    )
}

export default Footer