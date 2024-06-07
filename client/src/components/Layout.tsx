import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
import Infobar from "./Infobar"

const Layout = () => {
    return (
        <div className='flex overflow-hidden h-screen'>
            <Sidebar />
            <div className='w-full'>
                <Infobar />
                <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll">

                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Layout