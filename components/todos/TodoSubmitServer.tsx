import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/submit-button";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export default async function SubmitTodoServer() {
  const submitTodo = async (formData: FormData) => {
    "use server";
    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    const priority = formData.get("priority");

    if (!title || !priority || !content) {
      <h1>All fields must have a value.</h1>;
      return;
    }

    const supabase = createClient();

    const { data, error } = await supabase
      .from("todo")
      .insert([{ title: title, content: content, priority: priority }])
      .select("*");

    if (error) {
      console.error(error);
      return;
    }

    revalidatePath("/todo");
    return { data };
  };
  return (
    <>
    <h1 className="bold text-green-500">Server Sided Submit</h1>
      <form>
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" placeholder="Todo Title" required />
        <Label htmlFor="content">Content</Label>
        <Input type="text" name="content" placeholder="Todo Content" required />
        <Label htmlFor="priority">Title</Label>
        <Input
          type="number"
          name="priority"
          required
          defaultValue={0}
          min={0}
        />
        <SubmitButton pendingText="Adding Todo" formAction={submitTodo}>
          Add
        </SubmitButton>
      </form>
    </>
  );
}
