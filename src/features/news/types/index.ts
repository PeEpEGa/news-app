import type z from "zod";
import type { newsSchema } from "../schemas/news.schema";

export type News = z.infer<typeof newsSchema>;
