<script lang="ts">
	import {
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
				className="!bg-white !text-base-800 mb-4"
				floatingLabel={false}
			/>
		</div>

		<div>
			<PhoneField
				name="phone"
				placeholder="Phone"
				bind:value={phone}
				size="lg"
				floatingLabel={false}
				dialCode="+91"
        className="!bg-white !text-base-800 mb-4 border border-gray-300"
			/>
		</div>
		<div>
			<CountryComboboxField
				name="country"
				label="Country"
				bind:value={country}
				maxlength={50}
				floatingLabel={false}
        size="lg"
        className="!bg-white !text-base-800 mb-4 border border-gray-300"
			/>
		</div>

		<div>
			<TextareaField
				name="message"
				placeholder="Message"
				bind:value={message}
				size="lg"
				floatingLabel={false}
        className="!bg-white !text-base-800 mb-4 border border-gray-300"
			/>
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
