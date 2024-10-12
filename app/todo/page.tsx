import TodoServer from "@/components/todos/TodoServer";
import TodoClient, { Todo } from "@/components/todos/TodoClient";
import TodoSubmitServer from "@/components/todos/TodoSubmitServer";
import TodoSubmitClient from "@/components/todos/TodoSubmitClient";
import DeleteTodo from "@/components/todos/DeleteTodo";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const supabase = createClient();
  let { data: todos, error } = await supabase
    .from("todo")
    .select("*")
    .is("deleted", null);
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h1 className="bold text-pink-500">Todo Server</h1>
        <TodoServer todos={todos as Todo[]} />
        <DeleteTodo todos={todos as Todo[]} />
        <h1 className="bold text-blue-500">Todo Client</h1>
        <TodoClient />
        <TodoSubmitServer />
        <TodoSubmitClient />
      </main>
    </>
  );
}
