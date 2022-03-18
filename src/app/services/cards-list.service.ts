import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CardsListService {
    cards: Array<Card> = []

    createCard(title: string) {
        this.cards.push({title});
    }
}

export interface Card {
    title: string
}