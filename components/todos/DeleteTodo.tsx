import { createClient } from "@/utils/supabase/server";
import { Button } from "../ui/button";

export default async function TodoDelete(
  { id }: { id: number },
  onClick: () => void,
) {
  const supabase = createClient();
  async function deleteTodo(id: number) {
    const { data, error } = await supabase
      .from("todo")
      .update({ deleted: new Date() })
      .eq("id", id)
      .select();
  }

  return <Button>Delete</Button>;
}
