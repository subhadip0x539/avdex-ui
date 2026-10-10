import { z } from "zod";
import { Gender, Measurements, Site } from "../../common/index";

export const ResponseSchema = z.object({
  body: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      gender: Gender,
      age: z.number().optional(),
      birthdate: z.string(),
      height: z.number().optional(),
      weight: z.number().optional(),
      measurements: Measurements.optional(),
      image: z.string().optional(),
      extra: z.record(z.string(), z.string()).optional(),
      domain: Site.optional(),
      sites: z.array(Site).optional(),
    }),
  ),
});
