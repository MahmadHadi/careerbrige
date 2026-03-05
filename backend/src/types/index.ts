export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "student" | "expert" | "admin";
  isVerified: boolean;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}
