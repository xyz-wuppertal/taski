import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { TableProperties, SquareKanban } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dispatch, SetStateAction } from 'react';

type HeadingProps = {
    title: string;
    isTable?: boolean;
    setIsTable?: Dispatch<SetStateAction<boolean>>;
    tooltip?: string;
    btn: string;
    description: string;
};

const Heading = ({
    title, isTable = false, setIsTable, tooltip, btn, description
}: HeadingProps) => {
    const formattedDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }).replace(/ /g, ' ');

    const handleToggleView = () => {
        if (setIsTable) {
            setIsTable(!isTable);
        }
    };

    return (
        <div>
            <div className="flex items-start justify-between px-6">
                <div>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="flex gap-4">
                    {setIsTable && (
                        <TooltipProvider>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger onClick={handleToggleView}>
                                    {isTable ? <SquareKanban /> : <TableProperties />}
                                </TooltipTrigger>
                                <TooltipContent
                                    side="bottom"
                                    className="bg-black/10 backdrop-blur-xl mt-3"
                                >
                                    <p>{tooltip}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                    <Button className="flex gap-2" asChild = {btn === "date"}>
                    {btn === "date" ? 
                    <p className="text-[1.2rem]">
                        {formattedDate }
                    </p>
                    :  <> 
                        <Plus />
                        <Link to="/create-task">
                            {btn === "date" ? formattedDate : btn}
                        </Link>
                        </>
                    }
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Heading;
