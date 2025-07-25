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

<div class="relative isolate bg-white mx-auto my-16 p-0.5 px-4 md:my-32 md:px-16 lg:px-32">
	<div
		aria-hidden="true"
		class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
		></div>
	</div>
	<div
		aria-hidden="true"
		class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
	>
		<div
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
		></div>
	</div>
	<div class=" z-10 p-6 md:p-8">
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
						Email: <a href="mailto: support@amazeip.com" class="text-primary-500">
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
