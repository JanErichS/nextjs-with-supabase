import { createClient } from "@/utils/supabase/server";
import { formatDate } from "@/utils/utils";
import { Todo } from "./TodoClient";

const supabase = createClient();

export default async function TodoServer({ todos }: { todos: Todo[] }) {
  // Delete is not possible in server components. Needs state.
  // async function deleteTodo(id: number) {
  //   const { data, error } = await supabase
  //     .from("todo")
  //     .update({ deleted: new Date() })
  //     .eq("id", id)
  //     .select();
  // }
  if (!todos || todos.length === 0) return <h1>No todos Found! :(</h1>;

  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <table className="table-auto w-full  border border-gray-300">
          <thead className=" border-gray-300">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Content</th>
              <th className="px-4 py-2 text-left">Created</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} className="border border-gray-300">
                <td className="px-4 py-2">{todo.id}</td>
                <td className="px-4 py-2">{todo.title}</td>
                <td className="px-4 py-2">{todo.content}</td>
                <td className="px-4 py-2">
                  {formatDate(todo.created_at as unknown as number)}
                </td>
                <td className="px-4 py-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
