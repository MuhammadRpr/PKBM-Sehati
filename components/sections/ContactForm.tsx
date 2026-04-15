'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import {
  contactFormSchema,
  type ContactFormInput,
} from '@/lib/validation';

/**
 * ContactForm Component
 * Reusable contact form with validation
 */
export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormInput) => {
    try {
      setSubmitError(null);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Terjadi kesalahan saat mengirim pesan'
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-green-50 p-4 text-green-800">
        <h3 className="font-semibold">Pesan Terkirim!</h3>
        <p>Terima kasih telah menghubungi kami. Kami akan segera merespons.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {submitError && (
        <div className="rounded-lg bg-red-50 p-4 text-red-800">
          <p>{submitError}</p>
        </div>
      )}

      <Input
        label="Nama Lengkap"
        placeholder="Masukkan nama Anda"
        {...register('name')}
        error={errors.name?.message}
      />

      <Input
        label="Email"
        type="email"
        placeholder="email@example.com"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Nomor Telepon (Opsional)"
        placeholder="+62851234567"
        {...register('phone')}
        error={errors.phone?.message}
      />

      <Input
        label="Subjek"
        placeholder="Subjek pesan Anda"
        {...register('subject')}
        error={errors.subject?.message}
      />

      <Textarea
        label="Pesan"
        placeholder="Tulis pesan Anda di sini..."
        rows={5}
        {...register('message')}
        error={errors.message?.message}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
      >
        Kirim Pesan
      </Button>
    </form>
  );
}
