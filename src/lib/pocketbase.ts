import PocketBase, { RecordService } from 'pocketbase'

interface BaseCollection {
    id: string;
    collectionId: string;
    collectionName: string;
    created: Date;
    updated: Date;
}

export interface User extends BaseCollection {
    username: string;
    email: string;
    name: string;
    avatar: string;
}

export interface Event extends BaseCollection {
    date: string;
    title: string;
    description: string;
    image?: string;
}

export interface Character extends BaseCollection {
    name: string;
    alias?: string;
    description: string;
    image?: string;
    player: string;
    expand?: {
        player: User;
    }
}

export interface Person extends BaseCollection {
    name: string;
    description: string;
    status?: string;
    image?: string;
}

export interface Phone extends BaseCollection {
    owner: string;
    expand?: {
        owner: Character;
    }
    image: string;
}

export interface Sms extends BaseCollection {
    counterpart: string;
    phone: string;
    expand?: {
        phone: Phone;
    }
    message: string;
    published: boolean;
    isSender: boolean;
    receivedTime: Date;
}

interface TypedPocketBase extends PocketBase {
    collection(idOrName: string): RecordService // default fallback for any other collection
    collection(idOrName: 'events'): RecordService<Event>
    collection(idOrName: 'characters'): RecordService<Character>
    collection(idOrName: 'people'): RecordService<Person>
    collection(idOrName: 'phones'): RecordService<Phone>
    collection(idOrName: 'sms'): RecordService<Sms>
}

// const pbUrl = process.env.PB_URL || undefined;
export const pb = new PocketBase("http://localhost:8090") as TypedPocketBase;