import z from "zod";

const bookingSchema = z.object({
  expert: z.string().regex(/^[a-f\d]{24}$/i, "Invalid expert ID"),
  session_type: z.enum(["call", "video", "in-person"]),
  meeting_url: z.string().optional(),
  location: z.string().optional(),
  date: z.string(),
  start_time: z.string(),
  end_time: z.string().optional(),
  student_message: z.string().optional(),
});

const updateStatusSchema = z.object({
  status: z.enum(["confirmed", "cancelled", "completed"]),
});

export { bookingSchema, updateStatusSchema };

//! bookingSchema:-
// 1. Remove student — same as isVerified in expert, student ID comes from req.user.id, not from the request body.
// 2. Remove status — default is always pending on creation, user shouldn't be able to set this.
// 3. expert should be a valid MongoDB ObjectId string — add a regex check:
//          expert: z.string().regex(/^[a-f\d]{24}$/i, "Invalid expert ID")
