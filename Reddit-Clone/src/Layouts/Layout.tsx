import Footer from "../Components/Footer"
import NavBar from "../Components/NavBar"
import RedditAdCard from "../Components/RedditAdCard"
import SaleCard from "../Components/SaleCard"
import Sidebar from "../Components/SideBar"

export type Child = {
    children: React.ReactNode
}

const Layout = ({ children }: Child) => {
    return (
        <>
            <div>
                <NavBar />
                <div className="flex justify-between border-2 border-orange-500 h-full">

                    <Sidebar />
                    {children}
                    {/* <MainContent /> */}
                    <div className=" flex flex-col flex-1 w-1/4">
                        <SaleCard />
                        <RedditAdCard />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout