import type { Map } from 'leaflet';
import { writable } from 'svelte/store';

interface FunctionCallback {
	(li: Map): void;
}

export const leafletInstance = writable<null | Map>(null);

// This method make sure that we don't use the leaflet instance before it has been initialized.
export const updatedInstance = (fn: FunctionCallback) => {
	let isInitialized = false;

	leafletInstance.subscribe((li) => {
		if (!isInitialized) {
			isInitialized = true;
		} else {
			if (!li) throw new Error('The Map instance must be initialized');

			fn(li);
		}
	});
};
