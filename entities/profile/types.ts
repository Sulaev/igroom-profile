import { z } from "zod";

export const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const ProfileSchema = z.object({
  id: z.string(),
  role: z.string(),
  name: z.string(),
  nickname: z.string(),
  avatar_url: z.string().url(),
  age: z.number(),
  city: CitySchema,
  is_private: z.boolean(),
  telegram: z.string(),
  about: z.string(),
  points: z.number(),
  calling_limit: z.number(),
  going_limit: z.number(),
  account_status: z.string(),
  last_login_at: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Profile = z.infer<typeof ProfileSchema>;
