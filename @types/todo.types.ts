export type Todo = {
    id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date | null;
    deleted_at: Date | null;
  };