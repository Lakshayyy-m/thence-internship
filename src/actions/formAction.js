import { z } from "zod";

const infoSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Enter a valid email address" }),
});

export const action = async ({ request }) => {
  const data = await request.formData();
  const obj = {
    name: data.get("name"),
    email: data.get("email"),
  };

  const result = infoSchema.safeParse(obj);

  if (!result.success) {
    return { error: result.error.issues[0].message };
  }

  return { success: true };
};
