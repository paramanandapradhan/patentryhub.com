<script lang="ts">
	import {
		Button,
		EmailField,
		InputField,
		PhoneField,
		showToast,
		TextareaField
	} from '@cloudparker/moldex.js';

	let name: string = $state('');
	let email: string = $state('');
	let phone: string = $state('');
	let message: string = $state('');

	async function handleSubmit(e: any) {
		e.preventDefault();

		// Trim inputs
		name = (name || '').trim();
		email = (email || '').trim();
		// phone = (phone || '').trim();
		// message = (message || '').trim();

		// Validate required fields
		if (name && email) {
			try {
				const response = await fetch('https://formspree.io/f/xzzvzgyd', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name,
						email
					})
				});

				if (response.ok) {
					showToast({ msg: 'Message sent successfully!' });

					// Reset form fields
					name = '';
					email = '';
				} else {
					showToast({ msg: 'Failed to send message. Please try again later.' });
				}
			} catch (error) {
				console.error('Error submitting form:', error);
				showToast({ msg: 'Something went wrong!' });
			}
		} else {
			showToast({ msg: 'Missing Required Fields!' });
		}
	}
</script>

<div class="relative mx-auto my-16 rounded-lg p-0.5 px-4 shadow-md md:my-32 md:px-16 lg:px-32">
	<div class="relative z-10 rounded-lg bg-white/80 p-6 md:p-8">
		<h2 class="mb-4 text-center text-2xl font-bold text-base-900 md:text-3xl">Get in Touch</h2>
		<p class="mb-8 text-center text-base-700">
			We'd love to hear from you. Reach out to us for any inquiries or feedback.
		</p>
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2">
			<div>
				<form class="space-y-5" onsubmit={handleSubmit}>
					<div>
						<InputField
							placeholder="Name"
							name="name"
							type="text"
							className="!bg-white !text-base-800"
							bind:value={name}
							size="lg"
						/>
					</div>

					<div>
						<EmailField
							placeholder="Email Address"
							name="email"
							type="email"
							bind:value={email}
							size="lg"
							className="!bg-white !text-base-800"
						/>
					</div>

					<!-- <div>
						<PhoneField placeholder="Phone" bind:value={phone} size="lg" />
					</div>

					<div>
						<TextareaField placeholder="Message" bind:value={message} size="lg" />
					</div> -->

					<div>
						<Button
							label="Send Message"
							type="submit"
							appearance="border-primary"
							className="w-full"
						/>
					</div>
				</form>
			</div>
			<div>
				<div class="h-full w-full rounded-lg bg-base-100 p-6 md:p-8">
					<h3 class="mb-4 text-lg font-bold text-base-800 md:text-xl">Contact Information</h3>
					<p class="mb-4 text-base-700">
						Have questions? We're here to help. Reach out to us for any inquiries or feedback.
					</p>
					<p class="mb-4 text-base-700">
						Email: <a
							href="mailto: support@amazeip.com"
							class="text-primary-500"
						>
							support@amazeip.com</a
						>
					</p>
					<p class="mb-4 text-base-400">
						Phone: <a href="tel:+91 7995662228" class="text-primary-500">+91 7995662228</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
