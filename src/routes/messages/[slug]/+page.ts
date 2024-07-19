import { pb } from '$lib/pocketbase';

export const prerender = false;

export async function load({ params }) {
    const sms = await pb.collection('sms').getFullList({
        filter: `phone.id = "${params.slug}" && published = true`,
        expand: "phone.owner",
        sort: "receivedTime", 
    });

    let counterparts = [
        ...new Set(sms.map(message => message.counterpart)),
    ];

    return { sms, counterparts };
}