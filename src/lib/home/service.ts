import HomeContactFrom from '$lib/common/components/home-contact-from.svelte';
import { DialogSizeEnum, isMobileScreen, openDialog } from '@cloudparker/moldex.js';

export async function openContactDialog() {
	let res = await openDialog({
		bodyComponent: HomeContactFrom,
		props: {},
		hasHeader: true,
		scrollable: true,
		cancelable: true,
		hasTitle: true,
		title: 'Contact Us',
		hasHeaderBack: isMobileScreen(),
		hasHeaderClose: !isMobileScreen(),
		size: isMobileScreen() ? DialogSizeEnum.FULL : DialogSizeEnum.LG,
		hasFooter: true,
		hasFooterCloseButton: true,
		hasFooterOkButton: true,
		footerOkButtonLabel: "let's talk",
		targetFormId: 'contact-form',
		className:'!bg-white'
	});

	return res;
}
