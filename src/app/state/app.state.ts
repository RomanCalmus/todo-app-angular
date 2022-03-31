import { Card } from "../models/card.model";

export interface AppState {
    cards: ReadonlyArray<Card>,
    cardCollection: ReadonlyArray<string>
}