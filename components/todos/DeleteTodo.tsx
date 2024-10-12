"use server";
import { createClient } from "@/utils/supabase/server";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Todo } from "./TodoClient";
import { redirect } from "next/dist/server/api-utils";
import { revalidatePath } from "next/cache";

async function deleteTodo(formData: FormData) {
  "use server";
  const supabase = createClient();
  const id = formData.get("todoId");

  const { data, error } = await supabase
    .from("todo")
    .update({ deleted: new Date() })
    .eq("id", id)
    .select();

  // if (error) {
  //   console.error("Error deleting todo:", error);
  // } else {
  //   console.log("Todo deleted:", data);
  // }

  if (data) {
    return revalidatePath("/todo");
  }
}

export default async function TodoDelete({ todos }: { todos: Todo[] }) {
  return (
    <form action={deleteTodo}>
      <RadioGroup name="todoId" defaultValue="">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center space-x-2">
            <RadioGroupItem
              value={todo.id.toString()}
              id={todo.id.toString()}
            />
            <Label htmlFor={todo.id.toString()}>{todo.title}</Label>
          </div>
        ))}
      </RadioGroup>

      <Button variant="destructive" size="icon" type="submit">
        Delete
      </Button>
    </form>
  );
}
