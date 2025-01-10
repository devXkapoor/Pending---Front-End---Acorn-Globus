import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"
import RedditAdCard from "../Components/RedditAdCard"
import SaleCard from "../Components/SaleCard"
import SideBar from "../Components/SideBar"


export type Child = {
    children: React.ReactNode
}

const Layout = ({ children }: Child) => {
    return (
        <>
            <div className="container m-auto  h-">
                <NavBar />
                <div className="flex flex-row justify-between bg-gray-100 h-full p-0 m-0 border-2 border-red-500">
                    <SideBar />
                    {children}
                    <div className="flex flex-col justify-between items-center p-2 w-3/12 border-2 border-red-500">
                        <div className="flex flex-col gap-4 ">
                            <SaleCard />
                            <RedditAdCard />
                        </div>
                        {/* <div> */}
                        <Footer />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout