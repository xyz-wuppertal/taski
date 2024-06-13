import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CreateAndEditTaskSchema, Status, Priority, CreateAndEditTask } from "@/utils/type";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useCreateTask, useUpdateTask } from "@/api/mutations";
import { Loader } from 'lucide-react';
import { Task } from "@/utils/type"

interface TaskFormProps {
    mode: 'create' | 'edit';
    initialValues?: Partial<Task>;
}

const TaskForm: React.FC<TaskFormProps> = ({ mode, initialValues }) => {
    const createTask = useCreateTask();
    const updateTask = useUpdateTask();
    const form = useForm<z.infer<typeof CreateAndEditTaskSchema>>({
        resolver: zodResolver(CreateAndEditTaskSchema),
        defaultValues: {
            title: initialValues?.title || "",
            description: initialValues?.description || "",
            priority: initialValues?.priority || Priority.Low,
            status: initialValues?.status || Status.Todo,
        }
    });
    const priorities = Object.values(Priority);
    const status = Object.values(Status);

    useEffect(() => {
        if (initialValues) {
            form.reset(initialValues);
        }
    }, [initialValues, form]);

    const onSubmit = (task: CreateAndEditTask) => {
        if (mode === "create") {
            createTask.mutate(task)

        }
        else {
            const data = {
                values: task,
                taskId: initialValues?._id || ""
            }
            updateTask.mutate(data);
        }
    };

    return (
        <Form {...form}>
            <form
                className={`flex flex-col ${mode === 'edit' ? 'grid grid-cols-2 gap-6 w-[80%]' : 'gap-10'} w-[50%] m-auto pt-10`}
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-3 col-span-2'>
                            <FormLabel className='text-base-semibold text-light-2'>
                                Summary
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type='text'
                                    className='account-form_input no-focus'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-3'>
                            <FormLabel>Task Priority</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a priority" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {priorities.map((priority) => (
                                        <SelectItem key={priority} value={priority}>
                                            {priority}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-3'>
                            <FormLabel>Task Status</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a status" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {status.map((item) => (
                                        <SelectItem key={item} value={item}>
                                            {item}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='description'
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-3 col-span-2'>
                            <FormLabel className='text-base-semibold text-light-2'>
                                Description
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    rows={10}
                                    className='account-form_input no-focus'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='col-span-2'>
                    <Button type='submit' className="text-base w-full">
                        {createTask.isPending || updateTask.isPending ? (
                            <>
                                <Loader className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </>
                        ) : (
                            mode === 'create' ? 'Create Task' : 'Edit Task'
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default TaskForm;
