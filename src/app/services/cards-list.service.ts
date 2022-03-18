import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CardsListService {
    cards: Array<Card> = []

    createCard(title: string, tags: string[] = []) {
        this.cards.push({title, tags});
    }
}

export interface Card {
    title: string,
    tags: string[]
}