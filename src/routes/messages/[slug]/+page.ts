import { pb } from '$lib/pocketbase';

export const prerender = false;

export async function load({ params }) {
    const sms = await pb.collection('sms').getFullList();

    for (const message of sms) {
    }

    return { sms: sms.filter(s => s.phone === params.slug) };
}