import { pb } from '$lib/pocketbase';
import profile from "$lib/images/blank-profile.webp";

export const prerender = false;

export async function load() {
    const characters = await pb.collection('characters').getFullList();

    for (const character of characters) {
        if (!character.alias) {
            character.alias = character.name;
        }

        if (!character.image) {
            character.image = profile;
        }
        else {
            character.image = pb.files.getUrl({ collectionId: character.collectionId, id: character.id }, character.image);
        }
    }

    return { characters };
}