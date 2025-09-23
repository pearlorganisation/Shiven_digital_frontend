import { z } from "zod";
import { createApiResponseSchema } from "../common/schema";

export const AddressSchema = z.object({
  country: z.string().optional(),
  city: z.string().optional(),
  location: z.string().optional(),
  _id: z.string().optional(),
});

export const SocialSchema = z.object({
  instagram: z.string().url().optional(),
  facebook: z.string().url().optional(),
  twitter: z.string().url().optional(),
  youtube: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  _id: z.string().optional(),
});

export const ContactSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  address: AddressSchema.optional(),
});

export const BrandSchema = z.object({
  _id: z.string().optional(),
  userId: z.string(),
  name: z.string(),
  logo: z.string().url().optional(),
  description: z.string().optional(),
  website: z.string().url().optional(),
  contact: ContactSchema,
  social: SocialSchema.optional(),
});

export const GetBrandApiResponseSchema = createApiResponseSchema(
  z.object({
    brands: z.array(BrandSchema),
  })
);

export const AllBrandApiResponseSchema = createApiResponseSchema(
  z.object({
    brand: BrandSchema,
  })
);

export type BrandType = z.infer<typeof BrandSchema>;
export type GetBrandApiResponseType = z.infer<typeof GetBrandApiResponseSchema>;
export type AllBrandApiResponseType = z.infer<typeof AllBrandApiResponseSchema>;
