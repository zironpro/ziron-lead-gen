import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

const ContactFormSubmissionEmail = (props: {
	name?: string;
	company?: string;
	phone?: string;
	website?: string;
}) => {
	return (
		<Html dir="ltr" lang="en">
			<Tailwind>
				<Head />
				<Preview>
					New contact form submission from {props.name || "a potential client"}
				</Preview>
				<Body className="bg-[#f6f5f3] py-[40px] font-sans">
					<Container className="mx-auto max-w-[600px] rounded-[12px] bg-[#FFF] px-[32px] py-[40px] shadow-lg">
						{/* Header with Logo and Accent Bar */}
						<Section className="mb-[32px] text-center">
							<div className="mb-[24px] h-[4px] w-full rounded-t-[12px] bg-gradient-to-r from-[#ffc650] to-[#ffb020]" />
							<Link href="https://zironpro.ae">
								<Img
									alt="Ziron Pro"
									className="mx-auto h-auto w-full max-w-[200px]"
									src="https://di867tnz6fwga.cloudfront.net/brand-kits/453a191a-fef2-4ba6-88fe-b9e7a16650cd/primary/1329be73-d646-44f6-b4fc-eac25a3aaf74.png"
								/>
							</Link>
						</Section>
						{/* Main Content */}
						<Section>
							<Heading className="mb-[8px] text-center font-bold text-[#201f1d] text-[28px]">
								Fresh Lead Incoming!
							</Heading>
							<Text className="mb-[32px] text-center text-[#666] text-[16px] leading-[24px]">
								A potential client just reached out through your website. Here's
								what they shared:
							</Text>
							{/* Contact Details */}
							<Section className="mb-[32px] rounded-[12px] border-[#ffc650] border-l-[4px] border-solid bg-gradient-to-br from-[#f6f5f3] to-[#ede9e4] p-[32px]">
								<Text className="m-0 mb-[4px] font-bold text-[#201f1d] text-[13px] uppercase tracking-wide">
									Client Name
								</Text>
								<Text className="m-0 mb-[20px] font-semibold text-[#201f1d] text-[18px]">
									{props.name}
								</Text>
								<Text className="m-0 mb-[4px] font-bold text-[#201f1d] text-[13px] uppercase tracking-wide">
									Company Name
								</Text>
								<Text className="m-0 mb-[20px] font-semibold text-[#201f1d] text-[18px]">
									{props.company || "Not provided"}
								</Text>
								<Text className="m-0 mb-[4px] font-bold text-[#201f1d] text-[13px] uppercase tracking-wide">
									Phone / WhatsApp Number
								</Text>
								<Text className="m-0 mb-[20px] font-semibold text-[#201f1d] text-[18px]">
									{props.phone || "Not provided"}
								</Text>
								<Text className="m-0 mb-[4px] font-bold text-[#201f1d] text-[13px] uppercase tracking-wide">
									Website / Instagram Link
								</Text>
								<Text className="m-0 mb-[20px] font-semibold text-[#201f1d] text-[18px]">
									{props.website || "Not provided"}
								</Text>
							</Section>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactFormSubmissionEmail;
