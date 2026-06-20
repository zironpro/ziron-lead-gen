"use server";

import { getContactEmailConfig } from "./config";
import {
	createContactMailHtml,
	createContactMailText,
} from "./contact-form-submission-content";
import { createSmtpTransporter } from "./transporter";
import type { ContactFormEmailData } from "./types";

export async function sendContactFormSubmissionEmail(
	data: ContactFormEmailData
): Promise<boolean> {
	try {
		const contactEmailConfig = getContactEmailConfig();
		const transporter = createSmtpTransporter();

		if (!contactEmailConfig || !transporter) {
			console.error("Missing SMTP configuration or Transporter.");
			return false;
		}

		const html = await createContactMailHtml(data);
		await transporter.sendMail({
			from: contactEmailConfig.from,
			to: contactEmailConfig.to,
			subject: `New contact request from ${data.name}`,
			text: createContactMailText(data),
			html,
		});
		return true;
	} catch (error) {
		console.error("Failed to send email:", error);
		return false;
	}
}
