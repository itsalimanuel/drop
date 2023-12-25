import { z } from "zod";

export const emailSchema = z.string().email();

export const validateEmail = (email: string): boolean => {
  try {
    emailSchema.parse(email);
    return true;
  } catch (error) {
    return false;
  }
};
