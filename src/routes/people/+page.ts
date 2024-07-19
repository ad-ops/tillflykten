import { pb } from '$lib/pocketbase';
import profile from "$lib/images/blank-profile.webp";

export const prerender = false;

export async function load() {
    const people = await pb.collection('people').getFullList();

    for (const person of people) {
        if (!person.image) {
            person.image = profile;
        }
        else {
            person.image = pb.files.getUrl({ collectionId: person.collectionId, id: person.id }, person.image);
        }
    }

    return { people };
}