export type UserDetails = {
    id: number;
    username: string;
    email?: string;
    name: string;
    created_at: Date;
    deleted: Date | null;
}