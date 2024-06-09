import * as z from 'zod';



export interface Task {
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    createdAt?: string;
    updatedAt?: string;
    _id: string;
}

interface GroupedTasks {
    _id: string;
    tasks: Task[];
    count: number;
}

export interface AllTasksResponse {
    GroupByStatus: GroupedTasks[];
    GroupByPriority: GroupedTasks[];
    tasks: Task[]
}



export enum Status {
    Todo = "Todo",
    Doing = "Doing",
    Done = "Done",
    CodeReview = "Code Review",
    Testing = "Testing",
}

export enum Priority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

export const CreateAndEditTaskSchema = z.object({
    title: z.string().min(2, {
        message: "Title is too short"
    }),
    description: z.string().min(5, {
        message: "Description is too short"
    }),
    priority: z.nativeEnum(Priority).default(Priority.Low),
    status: z.nativeEnum(Status).default(Status.Todo),
})


export type CreateAndEditTask = z.infer<typeof CreateAndEditTaskSchema>