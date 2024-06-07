import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { ModeToggle } from './mode-toggle'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom';
import { menuOptions } from "@/constants/SidebarOptions";


const Sidebar = () => {
    const location = useLocation()
    return (
        <nav className=" dark:bg-black h-screen overflow-scroll  justify-between flex items-center flex-col  gap-10 py-10 px-4">
            <div className="flex items-center justify-center flex-col gap-8">
                <Link
                    className="flex font-bold flex-row "
                    to="/"
                >
                    Taski.
                </Link>
                <TooltipProvider>
                    {menuOptions.map((menuItem) => (
                        <ul key={menuItem.name}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link
                                            to={menuItem.href}
                                            className={clsx(
                                                'group h-10 w-10 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                                                {
                                                    'dark:bg-[#27272a] bg-[#ffd9a1] ':
                                                        location.pathname === menuItem.href,
                                                }
                                            )}
                                        >
                                            {menuItem.Component}
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="right"
                                    className="bg-black/10 backdrop-blur-xl"
                                >
                                    <p>{menuItem.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>
            </div>
            <div className="flex items-center justify-center flex-col gap-8">
                <ModeToggle />
            </div>
        </nav>
    )
}
export default Sidebar