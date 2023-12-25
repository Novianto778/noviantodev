import { render } from '@react-email/components';

import { transporter, smtpEmail } from '@/lib/nodemailer';

import { Email } from '@/components/ui/email';

export async function POST(req: Request, res: Response) {
    const body = await req.json();
    const { name, email, message } = body;

    const emailHtml = render(
        <Email name={name} email={email} message={message} />
    );

    const options = {
        from: smtpEmail,
        to: smtpEmail,
        subject: 'New Form Submission',
        html: emailHtml,
    };

    try {
        // Send email using the transporter
        await transporter.sendMail(options);
    } catch (error) {
        console.error('Failed to send email:', error);
        return new Response(JSON.stringify({ error: error }));
    }
    return new Response('OK');
}
