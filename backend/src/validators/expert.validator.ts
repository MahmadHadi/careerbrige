import z from "zod";

const expertSchema = z.object({
  bio: z.string().max(100, "Bio must be less than or equal to 100 characters"),
  company: z.string().min(2, "Company name should be atleast 2 characters "),
  designation: z.string(),
  sessionTypes: z
    .array(z.enum(["call", "video", "in-person"]))
    .min(1, "Select at least one session type"), // used arr -> multiple session type
  availability: z.array(
    z.object({
      day: z.string(),
      startTime: z.string(),
      endTime: z.string(),
    }),
  ),

  tags: z.array(z.string()).optional(),
  studentBackground: z.array(z.string()).optional(),
  portfolioImages: z.array(z.string()).optional(),

  socialLinks: z
    .object({
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
      website: z.string().url().optional(),
    })
    .optional(),

  education: z
    .array(
      z.object({
        institution: z.string(),
        degree: z.string(),
        field: z.string(),
        year: z.number(),
      }),
    )
    .optional(),
});

const updateExpertSchema = expertSchema.partial(); // because all fields are optional when updating

export { expertSchema, updateExpertSchema };
