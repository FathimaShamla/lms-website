import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const subjectLabels: Record<string, string> = {
  general: "General Inquiry",
  sales: "Sales & Pricing",
  support: "Technical Support",
  partnership: "Partnership Opportunities",
};

// Professional email template for inquiry (to company)
function getInquiryEmailTemplate(data: {
  name: string;
  email: string;
  company: string;
  subjectLabel: string;
  message: string;
}) {
  const { name, email, company, subjectLabel, message } = data;
  const timestamp = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">New Contact Form Submission</h1>
              <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">Nexus LMS Website</p>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="padding: 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                <tr>
                  <td>
                    <h2 style="margin: 0 0 20px 0; color: #111827; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Contact Details</h2>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                          <span style="color: #6b7280; font-size: 14px;">Name</span>
                        </td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                          <span style="color: #111827; font-size: 14px; font-weight: 500;">${name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                          <span style="color: #6b7280; font-size: 14px;">Email</span>
                        </td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                          <a href="mailto:${email}" style="color: #14b8a6; font-size: 14px; font-weight: 500; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                          <span style="color: #6b7280; font-size: 14px;">Company</span>
                        </td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">
                          <span style="color: #111827; font-size: 14px; font-weight: 500;">${company || "Not provided"}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #6b7280; font-size: 14px;">Subject</span>
                        </td>
                        <td style="padding: 8px 0; text-align: right;">
                          <span style="display: inline-block; background-color: #ccfbf1; color: #0d9488; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px;">${subjectLabel}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <h2 style="margin: 0 0 16px 0; color: #111827; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</h2>
              <div style="background-color: #f9fafb; border-left: 4px solid #14b8a6; padding: 20px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7;">${message.replace(/\n/g, "<br />")}</p>
              </div>

              <!-- Reply Button -->
              <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #14b8a6; color: #ffffff; font-size: 14px; font-weight: 600; padding: 14px 32px; border-radius: 8px; text-decoration: none;">Reply to ${name}</a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 40px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px; text-align: center;">
                Received on ${timestamp}<br />
                This email was sent from the Nexus LMS contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Professional email template for confirmation (to user)
function getConfirmationEmailTemplate(data: {
  name: string;
  subjectLabel: string;
  message: string;
}) {
  const { name, subjectLabel, message } = data;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding: 40px; text-align: center;">
              <div style="width: 60px; height: 60px; background-color: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 28px;">&#10003;</span>
              </div>
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700;">Message Received!</h1>
              <p style="margin: 12px 0 0 0; color: rgba(255,255,255,0.9); font-size: 15px;">Thank you for contacting Nexus LMS</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 24px 0; color: #111827; font-size: 16px; line-height: 1.6;">
                Hi <strong>${name}</strong>,
              </p>

              <p style="margin: 0 0 24px 0; color: #374151; font-size: 15px; line-height: 1.7;">
                Thank you for reaching out to us. We have received your inquiry and our team will review it shortly. You can expect to hear back from us within <strong>24 hours</strong>.
              </p>

              <!-- Summary Box -->
              <div style="background-color: #f9fafb; border-radius: 8px; padding: 24px; margin: 24px 0;">
                <h3 style="margin: 0 0 16px 0; color: #111827; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Your Inquiry Summary</h3>

                <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px;">
                  <strong style="color: #374151;">Subject:</strong> ${subjectLabel}
                </p>

                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                  <strong style="color: #374151;">Message:</strong>
                </p>
                <p style="margin: 8px 0 0 0; color: #374151; font-size: 14px; line-height: 1.6; padding-left: 12px; border-left: 2px solid #14b8a6;">
                  ${message.length > 200 ? message.substring(0, 200).replace(/\n/g, "<br />") + "..." : message.replace(/\n/g, "<br />")}
                </p>
              </div>

              <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7;">
                If you have any urgent questions, feel free to reach out to us directly.
              </p>

              <!-- Signature -->
              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6;">
                  Best regards,<br />
                  <strong style="color: #111827;">The Nexus LMS Team</strong>
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #111827; padding: 32px 40px; text-align: center;">
              <h2 style="margin: 0 0 8px 0; color: #ffffff; font-size: 18px; font-weight: 700;">Nexus LMS</h2>
              <p style="margin: 0 0 16px 0; color: #9ca3af; font-size: 13px;">Learn Without Limits</p>

              <p style="margin: 0; color: #6b7280; font-size: 12px; line-height: 1.6;">
                123 Innovation Drive, San Francisco, CA 94102<br />
                <a href="mailto:hello@nexuslms.com" style="color: #14b8a6; text-decoration: none;">hello@nexuslms.com</a>
              </p>

              <p style="margin: 24px 0 0 0; color: #4b5563; font-size: 11px;">
                This is an automated confirmation email. Please do not reply directly to this message.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const subjectLabel = subjectLabels[subject] || subject;

    // Email 1: Send inquiry to company
    const { error: inquiryError } = await resend.emails.send({
      from: "Nexus LMS <no-reply@techlabz.in>",
      to: ["fathima@techwarelab.com"],
      subject: `Enquiry: ${subjectLabel}`,
      html: getInquiryEmailTemplate({
        name,
        email,
        company,
        subjectLabel,
        message,
      }),
      replyTo: email,
    });

    if (inquiryError) {
      console.error("Resend inquiry error:", inquiryError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Email 2: Send confirmation to user
    const { error: confirmationError } = await resend.emails.send({
      from: "Nexus LMS <no-reply@techlabz.in>",
      to: [email],
      subject: "Thank you for contacting Nexus LMS",
      html: getConfirmationEmailTemplate({
        name,
        subjectLabel,
        message,
      }),
    });

    if (confirmationError) {
      console.error("Resend confirmation error:", confirmationError);
      // Don't fail the request if confirmation email fails
      // The inquiry was already sent successfully
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
