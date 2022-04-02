import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Card } from "../../../../models/card.model";

export interface CardsFeature {
    cards: Cards,
}

export type Cards = ReadonlyArray<Card>;

export const selectCardsFeature = createFeatureSelector<CardsFeature>('cardsFeature');
export const selectCardWindow = createFeatureSelector('cardWindow');
export const selectCard = (cardId: number|string) => createSelector(
    selectCards,
    (cards) => {
        cards.find((card) => card.id === cardId)
    }
);


export const selectCards = createSelector(
    selectCardsFeature,
    (feature) => feature.cards
);