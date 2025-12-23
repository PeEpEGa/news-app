import z from "zod";

export const newsSchema = z
  .object({
    id: z.number(),
    title: z.string(),
    summary: z.string(),
    published_at: z.iso.datetime(),
    image_url: z.url(),
  })
  .transform((obj) => ({
    ...obj,
    description: obj.summary,
    date: obj.published_at,
    image: obj.image_url,
  }));
