import "server-only";
import { render } from "@react-email/render";

import ContactFormSubmissionEmail from "@/feature/email/templates/contact-form-submission";

import type { ContactFormEmailData } from "./types";

export function createContactMailText(data: ContactFormEmailData): string {
	return [
		"New contact form submission",
		`Name: ${data.name}`,
		`Company: ${data.company || "Not provided"}`,
		`Phone: ${data.phone || "Not provided"}`,
		`Website: ${data.website || "Not provided"}`,
	].join("\n");
}

export async function createContactMailHtml(
	data: ContactFormEmailData
): Promise<string> {
	return render(
		ContactFormSubmissionEmail({
			name: data.name,
			company: data.company,
			phone: data.phone,
			website: data.website,
		})
	);
}
