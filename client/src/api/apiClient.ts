import axios from 'axios';

import { type CreateAndEditTask, type AllTasksResponse } from '@/utils/type';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const fetchTasks = async (): Promise<AllTasksResponse> => {
    const { data } = await axios.get<AllTasksResponse>(`${baseUrl}/tasks`);
    return data;
};

export const CreateTask = async (values: { values: CreateAndEditTask }) => {
    await axios.post<CreateAndEditTask>(`${baseUrl}/tasks`, values);
}

export const DeleteTask = async (taskId: string) => {
    await axios.delete<CreateAndEditTask>(`${baseUrl}/tasks/${taskId}`);
}