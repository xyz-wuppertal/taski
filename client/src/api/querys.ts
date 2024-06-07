import { useQuery } from '@tanstack/react-query';
import { type AllTasksResponse } from "@/utils/type"
import { fetchTasks } from './apiClient';

export const useFetchTasks = () => {
    return useQuery<AllTasksResponse>({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
    })
}