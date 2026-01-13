import { z } from "zod";

export const firebaseLoginSchema = z.object({
  idToken: z.string().min(1, "idToken không hợp lệ"),
});

export const providerLoginSchema = z.object({
  provider: z.enum(["GOOGLE", "FACEBOOK"]),
  providerId: z.string().min(1),
  profile: z.object({
    email: z.string().email().optional(),
    fullName: z.string().optional(),
  }),
});

export type FirebaseLoginValues = z.infer<typeof firebaseLoginSchema>;
export type ProviderLoginValues = z.infer<typeof providerLoginSchema>;
