<script lang="ts">
	import { Button, EmailField, showToast } from '@cloudparker/moldex.js';

	let email: string = $state('');

	async function handleSubmit(event: any) {
		event.preventDefault();

		// Trim inputs

		email = (email || '').trim();

		// Validate required fields
		if (email) {
			try {
				const response = await fetch('https://formspree.io/f/xzzvwkye', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email
					})
				});

				if (response.ok) {
					showToast({ msg: 'Message sent successfully!' });

					// Reset form fields

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

<div class="">
	<form class="space-y-5" onsubmit={handleSubmit}>
		<div>
			<EmailField
				placeholder="Email Address"
				bind:value={email}
				className="!bg-white !text-base-800"
			/>
		</div>

		<div>
			<Button label="SUBSCRIBE" appearance="border-primary" className="w-full "  type="submit"/>
		</div>
	</form>
</div>
