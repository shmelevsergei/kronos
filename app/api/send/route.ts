import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
	try {
		const { name, email, message } = await request.json();

		// Настройка транспорта для nodemailer
		const transporter = nodemailer.createTransport({
			host: "sm17.hosting.reg.ru",
			port: 587, // или 587 для STARTTLS
			secure: false, // true для 465, false для других портов
			auth: {
				user: process.env.EMAIL_USER, // email из .env
				pass: process.env.EMAIL_PASSWORD, // пароль из .env
			},
		});

		// Отправка письма
		await transporter.sendMail({
			from: `"Contact Form" <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_RECIPIENT || "your-email@example.com", // куда отправлять
			subject: `Новое сообщение от ${name}`,
			text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
			html: `
        <p>Новое сообщение с формы обратной связи</p>
        <ul>
          <li><strong>Имя:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
      `,
		});

		return NextResponse.json({
			success: true,
			message: "Email sent successfully",
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ success: false, message: "Failed to send email" },
			{ status: 500 }
		);
	}
}
