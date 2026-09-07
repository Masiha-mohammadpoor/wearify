import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOTPEmail(email, otp, type) {
  const subject =
    type === "sign-in"
      ? "Your sign-in code"
      : type === "email-verification"
      ? "Verify your email"
      : "Reset your password";

  await resend.emails.send({
    from: "onboarding@resend.dev", // replace with your verified domain later
    to: email,
    subject,
    html: `<p>Your verification code: <b style="font-size:20px">${otp}</b></p><p>This code expires in 5 minutes.</p>`,
  });
}