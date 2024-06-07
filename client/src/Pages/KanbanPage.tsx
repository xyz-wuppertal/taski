import { useEffect, useState } from 'react';
import BreadCrumb from '@/components/BreadCrumb';
import { fetchTasks } from '@/api/apiClient';
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import KanbanBoard from '@/components/KanbanBoard';
import Heading from '@/components/Heading';
import { TasksTable } from '@/components/TasksTable';


const KanbanPage = () => {
    const [queryClient] = useState(() => new QueryClient());
    const [isTable, setIsTable] = useState(false)
    const [isPrefetched, setIsPrefetched] = useState(false);

    useEffect(() => {
        const prefetchData = async () => {
            await queryClient.prefetchQuery({
                queryKey: ['tasks'],
                queryFn: () => fetchTasks(),
                staleTime: 5000
            });
            setIsPrefetched(true);
        };
        prefetchData();
    }, [queryClient]);

    if (!isPrefetched) {
        return <div>Loading...</div>; // or a loading spinner
    }

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="flex flex-col gap-4 relative">
                <div className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
                    <BreadCrumb page="Kanban Board" />
                </div>
                <Heading title={"Kanban"} isTable={isTable} setIsTable={setIsTable} tooltip={
                    isTable ? "Switch to Kanban Mode" : "Switch to Table Mode"
                } />
                {
                    isTable ? (
                        <TasksTable />
                    ) : (
                        <KanbanBoard />
                    )
                }
            </div>
        </HydrationBoundary>
    );
};

export default KanbanPage;
