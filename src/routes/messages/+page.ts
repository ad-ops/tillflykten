import { pb } from '$lib/pocketbase';

export const prerender = false;

export async function load() {
    const phones = await pb.collection('phones').getFullList();

    for (const phone of phones) {
        phone.image = pb.files.getUrl({ collectionId: phone.collectionId, id: phone.id }, phone.image);

        const owner = await pb.collection('characters').getOne(phone.owner);
        phone.owner = owner.alias || owner.name;
    }

    return { phones };
}