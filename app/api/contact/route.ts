import { validateContactForm } from '@/lib/validation';

/**
 * POST /api/contact
 * Handle contact form submissions
 * 
 * For this example, we just validate and return success.
 * In production, integrate with email service like Resend or SendGrid.
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate using our schema
    const validated = validateContactForm(body);

    if (!validated.success) {
      return Response.json(
        {
          error: 'Validation failed',
          details: validated.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // TODO: Send email using Resend or SendGrid
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: 'noreply@pkbmsehati.id',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `Kontak baru: ${validated.data.name}`,
    //   html: renderContactEmail(validated.data),
    // });

    console.log('Contact form submission:', validated.data);

    return Response.json(
      {
        success: true,
        message: 'Pesan Anda telah terkirim. Terima kasih telah menghubungi PKBM SEHATI!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return Response.json(
      {
        error: 'Internal server error',
        message: 'Terjadi kesalahan saat memproses pesan Anda',
      },
      { status: 500 }
    );
  }
}
