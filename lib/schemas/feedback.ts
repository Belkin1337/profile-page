import { z } from "zod";

export const FormSchema = z.object({
  name: z.string()
    .min(4, { message: "Имя должно состоять хотя бы из 4 символов." })
    .max(32, { message: "Максимальная длина имени - не более 32 символов." }),
  topic: z.string().min(1, {
    message: "Тема сообщения не может быть пустой."
  }).max(32),
  message: z.string()
    .min(12, { message: "Сообщение должно состоять хотя бы из 12 символов." })
    .max(160, { message: "Максимальная длина сообщения - не более 160 символов." }),
});