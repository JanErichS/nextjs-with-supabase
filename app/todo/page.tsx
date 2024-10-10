import TodoServer from "@/components/todos/TodoServer";
import TodoClient from "@/components/todos/TodoClient";
import TodoSubmitServer from "@/components/todos/TodoSubmitServer";
import TodoSubmitClient from "@/components/todos/TodoSubmitClient";

export default async function Index() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h1 className="bold text-pink-500">Todo Server</h1>
        <TodoServer />
        <h1 className="bold text-blue-500">Todo Client</h1>
        <TodoClient />
        <TodoSubmitServer />
        <TodoSubmitClient />
      </main>
    </>
  );
}
