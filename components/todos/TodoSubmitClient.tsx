"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/submit-button";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default async function SubmitTodoClient() {
  const supabase = createClient();
  const router = useRouter();

  async function submitTodo(formData: FormData) {
    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    const priority = formData.get("priority");

    if (!title || !priority || !content) {
      <h1>All fields must have a value.</h1>;
      return;
    }

    const { data, error } = await supabase
      .from("todo")
      .insert([{ title: title, content: content, priority: priority }])
      .select("*");

    if (error) {
      console.error(error);
      return;
    }

    router.refresh();
  }

  return (
    <>
      <h1 className="bold text-orange-500">Client Sided Submit</h1>
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
