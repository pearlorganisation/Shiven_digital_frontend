import { z } from "zod";
import { ContactSchema, SocialSchema } from "./brandSchema";
import { createApiResponseSchema } from "../common/schema";

export const CreateBrandPayloadSchema = z.object({
  name: z.string(),
  logo: z.string().url().optional(),
  description: z.string().optional(),
  website: z.string().url().optional(),
  contact: ContactSchema,
  social: SocialSchema.optional(),
});


export const UpdateBrandPayloadSchema = z.object({
  name: z.string().optional(),
  logo: z.string().url().optional(),
  description: z.string().optional(),
  website: z.string().url().optional(),
  contact: ContactSchema.partial().optional(),
  social: SocialSchema.partial().optional(),
});

export const CreateBrandApiResponseSchema = createApiResponseSchema(
  z.object({
    brand: CreateBrandPayloadSchema, 
  })
);

export const UpdateBrandApiResponseSchema = createApiResponseSchema(
  z.object({
    brand: UpdateBrandPayloadSchema,
  })
);

export type CreateBrandPayloadType = z.infer<typeof CreateBrandPayloadSchema>;
export type UpdateBrandPayloadType = z.infer<typeof UpdateBrandPayloadSchema>;
