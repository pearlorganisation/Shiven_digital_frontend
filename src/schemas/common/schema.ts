import { z } from "zod";

// 🔹 Generic API response schema builder
export const createApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    statusCode: z.number(),
    message: z.string(),
    success: z.boolean(),
    data: dataSchema,
  });

// 🔹 For responses with unknown/empty data
const unknownDataSchema = z.unknown();

export const EmptyApiResponseSchema = createApiResponseSchema(unknownDataSchema);

// --- Types ---
export type EmptyApiResponse = z.infer<typeof EmptyApiResponseSchema>;
