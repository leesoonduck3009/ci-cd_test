export class Task {
    title: string;
    description: string;

    constructor( title: string, description: string) {
        this.title = title;
        this.description = description;
    }

    static validate(task: Task): boolean {
        if (!task.title || !task.description) {
            return false;
        }
        return true;
    }
}