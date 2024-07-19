import { pb } from '$lib/pocketbase';

export const prerender = false;

export async function load() {
    const events = await pb.collection('events').getFullList({
        sort: '-created',
    });

    return { events };
}