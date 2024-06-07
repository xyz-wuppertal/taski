import axios from 'axios';

import { type AllTasksResponse } from '@/utils/type';

const baseUrl = import.meta.env.VITE_BASE_URL;

export const fetchTasks = async (): Promise<AllTasksResponse> => {
    const { data } = await axios.get<AllTasksResponse>(`${baseUrl}/tasks`);
    return data;
};

