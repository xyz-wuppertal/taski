import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type CreateAndEditTask, } from "@/utils/type"
import { CreateTask, DeleteTask, UpdateTask } from './apiClient';
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';

export function useCreateTask() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (values: CreateAndEditTask) => CreateTask({ values }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tasks"]
            })
            toast.success('Task created successfully')

            navigate("/kanban")
        }
    })
}

export function useDeleteTask() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (taskId: string) => DeleteTask(taskId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tasks"]
            })
            toast.success('Task deleted successfully')
        }
    })
}

export function useUpdateTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (Variable: { taskId: string, values: CreateAndEditTask }) => UpdateTask(Variable),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
            toast.success('Task updated successfully');
        },
        onError: () => {
            toast.error('Something went wrong');
        }
    });
}