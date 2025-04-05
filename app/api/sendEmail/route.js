import nodemailer from "nodemailer";
const mode = "browser"; // "node" | "browser"
export async function POST(request) {
  if (request.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, choice, message } = await request.json();

  if (mode === "node") {
    // Using nodemailer to send email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Email gửi thông báo
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      const result = await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER, // Email nhận thông báo
        cc: process.env.EMAIL_CC, // CC email nhận thông báo
        subject: `New Message from ${name}`,
        html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Roboto", sans-serif;
        background-color: #f8f9fa;
        padding: 20px;
        font-size: 1.2rem;
      }
      .text-write {
        font-family: "Fleur De Leah", cursive;
      }
      h1 {
        color: #333;
      }
      p {
        color: #555;
      }
      strong {
        color: #333;
      }
    </style>
  </head>
  <body>
    <div
      class="container mx-auto p-8 shadow-lg rounded-lg max-w-[800px] bg-blue-50"
    >
      <h3 class="text-2xl font-bold mb-4">
        New Message from
        <span class="text-write text-green-600 font-bold"> ${name} </span>
      </h3>
      <p class="mb-2">
        <span class="text-cyan-600">
          ${name} &lt;${email}&gt;
        </span>
        has sent you a message.
      </p>
      <p class="mb-2">Contact Number: <strong>${phone}</strong></p>
      <p class="mb-2">They're from: <strong>${choice}</strong></p>
      <blockquote
        class="relative mt-5 border-r-4 border-gray-300 pl-10 text-gray-600"
      >
        <svg
          class="absolute -top-6 start-0 size-16 text-blue-100"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
            fill="currentColor"
          ></path>
        </svg>

        <div class="relative z-10">
          <p class="text-gray-800 sm:text-4xl lg:text-3xl text-write">
            ${message}
          </p>
        </div>
      </blockquote>
    </div>
  </body>
</html>
      `,
      });

      return new Response(
        JSON.stringify({ message: "Email sent successfully!", result }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Lỗi gửi email:", error);
      return new Response(
        JSON.stringify({
          message: "Error sending email",
          error: error.message,
        }),
        { status: 500 }
      );
    }
  } else {
    // Using emailjs to send email
    if (!emailjs) {
      return new Response(
        JSON.stringify({ message: "EmailJS is not available" }),
        { status: 500 }
      );
    }

    // using emailjs to send email
    const serviceID = process.env.SERVICE_ID;
    const templateID = process.env.TEMPLATE_ID;
    const publicKey = process.env.PUBLIC_KEY;

    const emailParams = {
      email,
      name,
      phone,
      choice,
      message,
    };
    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        publicKey
      );
      return new Response(
        JSON.stringify({ message: "Email sent successfully!", result }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response(
        JSON.stringify({
          message: "Error sending email",
          error: error.message,
        }),
        { status: 500 }
      );
    }
  }
}
