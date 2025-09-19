import { z } from "zod";

// 🔹 Generic API response schema builder
export const createApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    statusCode: z.number(),
    message: z.string(),
    success: z.boolean(),
    data: dataSchema,
  });






//this thing is serate
  // 🔹 For responses with unknown/empty data
const unknownDataSchema = z.unknown();

export const EmptyApiResponseSchema = createApiResponseSchema(unknownDataSchema); // this is to validate the api response

// --- Types ---
export type EmptyApiResponse = z.infer<typeof EmptyApiResponseSchema>; //this is type for safety typing
