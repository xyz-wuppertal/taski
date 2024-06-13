import { useQuery } from '@tanstack/react-query';
import { Task, type AllTasksResponse } from "@/utils/type"
import { fetchTasks , fetchSingleTaskById } from './apiClient';

export const useFetchTasks = () => {
    return useQuery<AllTasksResponse>({
        queryKey: ['tasks'],
        queryFn: fetchTasks,
    })
}

export const useFetchSingleTask = ({taskId} : {taskId : string}) => { 
    return useQuery<Task>({
        queryKey: ['task', taskId],
        queryFn: () => fetchSingleTaskById(taskId),
    })
}