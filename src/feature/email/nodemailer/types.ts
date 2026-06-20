export interface EmailSmtpConfig {
	host: string;
	port: number;
	secure: boolean;
	user: string;
	pass: string;
}

export interface ContactEmailConfig {
	from: string;
	to: string;
}

export interface ContactFormEmailData {
	name: string;
	company?: string;
	phone?: string;
	website?: string;
}
