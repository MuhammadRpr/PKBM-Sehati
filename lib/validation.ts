import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(100, 'Nama maksimal 100 karakter'),
  email: z
    .string()
    .email('Email tidak valid'),
  phone: z
    .string()
    .regex(/^(\+62|62|0)[0-9\s\-]{9,}$/, 'Nomor telepon tidak valid')
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .min(5, 'Subjek minimal 5 karakter')
    .max(200, 'Subjek maksimal 200 karakter'),
  message: z
    .string()
    .min(10, 'Pesan minimal 10 karakter')
    .max(5000, 'Pesan maksimal 5000 karakter'),
  programOfInterest: z
    .enum(['paket-a', 'paket-b', 'paket-c', 'other'])
    .optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export function validateContactForm(data: unknown) {
  return contactFormSchema.safeParse(data);
}
