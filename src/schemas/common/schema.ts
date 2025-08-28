import { z } from "zod";

export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    statusCode: z.number(),
    message: z.string(),
    success: z.boolean(),
    data: dataSchema,
  });

const unknownSchema = z.unknown();
export const ResponseSchema = ApiResponseSchema(unknownSchema);

export type ApiResponse  = z.infer<typeof ResponseSchema>;
