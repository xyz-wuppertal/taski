import { Plus } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { TableProperties, SquareKanban } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dispatch, SetStateAction } from 'react'
type HeaddingProps = {
    title: string,
    isTable: boolean,
    setIsTable: Dispatch<SetStateAction<boolean>>,
    tooltip?: string,
}
const Heading = ({
    title, isTable, setIsTable, tooltip
}: HeaddingProps) => {
    return (
        <div>
            <div className="flex items-start justify-between px-6">
                <div>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p>Manage tasks by dnd</p>
                </div>
                <div className="flex gap-4">
                    <TooltipProvider >
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger onClick={() => setIsTable(!isTable)} >
                                {isTable ? <SquareKanban /> : <TableProperties />}
                            </TooltipTrigger>
                            <TooltipContent
                                side="bottom"
                                className="bg-black/10 backdrop-blur-xl mt-3"
                            >
                                <p>
                                    {tooltip}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Button className="flex gap-2">
                        <Plus />
                        <Link to="/create-task">
                            Add New Todo
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Heading