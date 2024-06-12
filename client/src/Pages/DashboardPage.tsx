import { useEffect, useState } from 'react';
import BreadCrumb from '@/components/BreadCrumb';
import { fetchTasks } from '@/api/apiClient';
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import Heading from '@/components/Heading';



const DashboardPage = () => {
    const [queryClient] = useState(() => new QueryClient());
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
            <div className='flex flex-col gap-4 relative'>
            <div className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
                    <BreadCrumb  />
                </div>
                <Heading title="Dashboard" btn = "date" description="Manage tasks by dnd" />
            </div>
    </HydrationBoundary>
    )
}
export default DashboardPage