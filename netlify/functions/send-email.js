const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message, token } = JSON.parse(event.body || "{}");

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing fields" }) };
  }

  // Verify Turnstile token
  const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  const { success } = await verify.json();
  if (!success) {
    return { statusCode: 400, body: JSON.stringify({ error: "CAPTCHA failed" }) };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: `${name} <${email}>`,
      subject: `[Portfolio] Mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("SMTP error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send" }) };
  }
};
