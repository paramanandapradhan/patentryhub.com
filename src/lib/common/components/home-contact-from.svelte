<script lang="ts">
	import {
		Button,
		CheckboxField,
		CountryComboboxField,
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
	let country: string = $state('');

	async function handleSubmit(ev: SubmitEvent) {
		ev.preventDefault();

		// Trim inputs
		name = (name || '').trim();
		email = (email || '').trim();
		phone = (phone || '').trim();
		message = (message || '').trim();
		country = (country || '').trim();

		// Validate required fields
		if (name && email && country && message && phone) {
			try {
				const response = await fetch('https://formspree.io/f/xzzvzgyd', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name,
						email,
						phone,
						message,
						country
					})
				});

				if (response.ok) {
					showToast({ msg: 'Message sent successfully!' });

					// Reset form fields
					name = '';
					email = '';
					phone = '';
					message = '';
					country = '';
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

<div class="py-6 text-center">
	<h2 class="text-2xl font-bold text-base-900 md:text-3xl">
		First 3 drawings free on your first order
	</h2>
	<p class="mt-2 text-lg text-base-700">Contact us to get started</p>
	<div class="mt-4 mx-auto h-1 w-[30%] bg-primary-500 rounded-full"></div>
</div>
<form id="contact-form" class="space-y-5" onsubmit={handleSubmit}>
	<div class="p-6">
		<div>
			<InputField
				placeholder="Name"
				autofocus
				name="name"
				type="text"
				className="!bg-white !text-base-800 mb-4"
				maxlength={25}
				floatingLabel={false}
				bind:value={name}
				
			/>
		</div>

		<div>
			<EmailField
				placeholder="Email Address"
				name="email"
				type="email"
				bind:value={email}
				
				className="!bg-white !text-base-800 mb-4"
				floatingLabel={false}
			/>
		</div>

		<div>
			<input
				type="tel"
				name="phone"
				placeholder="Phone"
				bind:value={phone}
				class="mb-4 w-full rounded-lg border border-base-700 bg-white px-4 py-2 text-base text-base-800 placeholder:text-base-400 focus:outline-none"
			/>
		</div>
		<div>
			<input
				type="text"
				name="country"
				placeholder="Country"
				bind:value={country}
				class="mb-4 w-full rounded-lg border border-base-700 bg-white px-4 py-2 text-base text-base-800 placeholder:text-base-400 focus:outline-none"
			/>
		</div>

		<div>
			<textarea
				name="message"
				placeholder="Message"
				bind:value={message}
				rows="4"
				class="mb-4 w-full rounded-lg border border-base-700 bg-white px-4 py-2 text-base text-base-800 placeholder:text-base-400 focus:outline-none"
			></textarea>
		</div>

		<div class="flex gap-x-4 sm:col-span-2">
			<div class="flex h-6 items-center">
				<div
					class="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px outline-offset-2 outline-indigo-600 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-600 has-[:focus-visible]:outline has-[:focus-visible]:outline-2"
				>
					<span
						class="size-4 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-3.5"
					></span>
					<input
						id="agree-to-policies"
						type="checkbox"
						name="agree-to-policies"
						aria-label="Agree to policies"
						class="absolute inset-0 appearance-none focus:outline-none"
					/>
				</div>
			</div>
			<label for="agree-to-policies" class="text-sm/6 text-gray-600">
				By selecting this, you agree to our
				<a href="#" class="whitespace-nowrap font-semibold text-indigo-600">privacy policy</a>.
			</label>
		</div>

		<!-- <div>
			<Button label="Send Message" type="submit" appearance="border-primary" className="w-full" />
		</div> -->
	</div>
</form>
