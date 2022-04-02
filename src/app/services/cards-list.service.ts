import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { strOrNum } from "../misc/type.utils";
import { Card } from "../models/card.model";
import { cardsUrls } from "./server.config";

@Injectable({
    providedIn: 'root',
})
export class CardsListService {
    constructor(private http: HttpClient) {}

    getCards(): Observable<Card[]> {
        return this.http.get<Card[]>(cardsUrls.cards());
    }

    createCard(card: Omit<Card, "id">) {
        return this.http.post(cardsUrls.cards(), card);
    }

    removeCard({id}: {id: strOrNum}) {
        return this.http.delete(cardsUrls.card(id));
    }
}

export const CardsListEvents = {
    LoadCards: '[Cards List] Load Cards',
    LoadedSuccess: '[Card List] Loaded Success',
    LoadedError: '[Card List] Loaded Error',

    RemoveCard: '[Card List] Remove Card',
    RemoveCardSuccess: '[Card List] Remove Card Success',

    CreateCard: '[Card List] Create Card',
    CreateCardSuccess: '[Card List] Create Card Success',
    CreateCardError: '[Card List] Create Error',
}