export interface Game {
    id: string;
    cards: Card[];
}

export interface Card {
    codename: string;
    identified: boolean;
    identity?: Identity;
}

export interface Identity {
    type: 'red' | 'blue' | 'bystander' | 'assassin';
    gender?: 'female' | 'male';
}