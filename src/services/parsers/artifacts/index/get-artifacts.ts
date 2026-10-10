import type { Payload } from "@/lib/http-client";
import { ResponseSchema } from "@/services/schemas/artifacts/index/get-artifacts";
import z from "zod";

export type Response = z.infer<typeof ResponseSchema>;

export type ParsedResponse = Response["body"];

export type Request = Payload & {
  params: {
    sort?: string;
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
