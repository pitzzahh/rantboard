type User = {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
    todos?: string[];
};

type Todo = {
    id: string;
    user: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'done';
    createdAt: Date;
    updatedAt?: Date;
};

enum Status {
    Pending = 'pending',
    InProgress = 'in-progress',
    Done = 'done',
}

type TodoCreate = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>;
type TodoUpdate = Partial<TodoCreate> & Pick<Todo, 'id' | 'user'>;
type UserCreate = Omit<User, 'id'>;