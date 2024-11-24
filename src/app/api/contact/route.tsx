import { render } from "@react-email/components";

import { transporter, smtpEmail } from "@/lib/nodemailer";

import { Email } from "@/components/ui/email";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, email, message } = body;

  const emailHtml = render(
    <Email name={name} email={email} message={message} />
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "New Form Submission",
    html: emailHtml,
  };

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log("err", error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  try {
    // Send email using the transporter
    await transporter.sendMail(options);
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }

  return new Response("OK");
}
