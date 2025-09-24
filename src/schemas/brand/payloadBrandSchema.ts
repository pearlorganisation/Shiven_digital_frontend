import { z } from "zod";
import { ContactSchema, SocialSchema } from "./brandSchema";
import { createApiResponseSchema } from "../common/schema";

// --- Create Brand Payload ---
export const CreateBrandPayloadSchema = z.object({
  name: z.string(),
  logo: z.string().url().optional(),
  description: z.string().optional(),
  website: z.string().url().optional(),
  contact: ContactSchema,
  social: SocialSchema.optional(),
});

// --- Update Brand Payload ---
export const UpdateBrandPayloadSchema = z.object({
  name: z.string().optional(),
  logo: z.string().url().optional(),
  description: z.string().optional(),
  website: z.string().url().optional(),
  contact: ContactSchema.partial().optional(),
  social: SocialSchema.partial().optional(),
});

// --- API Response Schemas ---
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

// --- Types ---
export type CreateBrandPayloadType = z.infer<typeof CreateBrandPayloadSchema>;
export type UpdateBrandPayloadType = z.infer<typeof UpdateBrandPayloadSchema>;
