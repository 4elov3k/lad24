
export type Task = {
    id: string,
    name: string,
    date: string
}
export const TaskNotFoundError = new Error('Task not found');



