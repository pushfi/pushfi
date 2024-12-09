// validationSchema.ts
import * as z from "zod";

export const schema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email address" }),

    password: z.string().min(1, { message: "password is required" }),
});

export type FormData = z.infer<typeof schema>;
