import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.issues.map((e) => ({
          field: String(e.path.join(".")),
          message: e.message,
        })),
      });
    }

    req.body = result.data;
    next();
  };
};

export default validate;
