import type { Option } from "@/types/common";

export const isOption = (value: unknown): value is Option =>
  typeof value === "object" &&
  value !== null &&
  "name" in value &&
  "label" in value &&
  typeof (value as Option).name === "string" &&
  typeof (value as Option).label === "string";
