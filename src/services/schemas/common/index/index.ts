import z from "zod";

export const Gender = z.enum(["male", "female", "other"]);

export const Site = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
});

export const Measurements = z.object({
  chest: z.number(),
  waist: z.number(),
  hips: z.number(),
});
