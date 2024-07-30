import { z } from "zod";

export const validBrantTypes = [
    "Co-Branded with Midas",
    "Midas only Branded With Agent Name",
] as const; // Allowed categories

export const addBrandSchema = z.object({
    email: z.string().min(1, "Email is required").email(),
    phone: z.string().regex(/^\+1\d{9}$/, {
        message: "Phone number must be a valid USA number starting with +1",
    }),
    fName: z.string().min(1, "First Name is required"),
    lName: z.string().min(1, "Last Name is required"),
    cName: z.string().min(1, "Company Name is required"),
    wUrl: z.string().min(1, "website Url is required"),
    accountInfo: z.string().min(1, "Disbursement Account info is required"),
    brandingType: z.enum(validBrantTypes, {
        errorMap: (issue, ctx) => ({
            message: `Invalid Branding types. Please select one of the following: ${validBrantTypes.join(
                ", "
            )}`,
        }),
    }),
    fullName: z.string().min(1, "Full Names are required"),
    terms: z.boolean().refine((value) => value, "You must agree to the terms"),
});

export type TaddBrandSchema = z.infer<typeof addBrandSchema>;
