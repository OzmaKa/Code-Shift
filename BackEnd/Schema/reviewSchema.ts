import { z } from "zod"

export const ReviewSchema = z.object({
    score: z.number().min(1).max(10),
    issues: z.array(z.string()),
    suggestion: z.string(),
    approved: z.boolean()
})

export type ReviewResult = z.infer<typeof ReviewSchema>