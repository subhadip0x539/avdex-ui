import { ResponseSchema } from "@/services/schemas/artifacts/id/get-artifact";
import z from "zod";

export type Response = z.infer<typeof ResponseSchema>;

export type ParsedResponse = Response["body"];

export type Request = {
  path: {
    id: string;
  };
};

export const parse = (data: Response): ParsedResponse | null => {
  const { data: value, success, error } = ResponseSchema.safeParse(data);

  if (!success) {
    console.warn(error);
    return null;
  }

  return value.body;
};
