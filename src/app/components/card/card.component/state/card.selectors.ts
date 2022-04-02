import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Card } from "../../../../models/card.model";

export interface CardsFeature {
    cards: Cards,
    selectedCardId: number
}

export type Cards = ReadonlyArray<Card>;

export const selectCardsFeature = createFeatureSelector<CardsFeature>('cardsFeature');
export const selectCardWindow = createFeatureSelector('cardWindow');

export const selectOpenedCard = createSelector(
    selectCardsFeature,
    (feature) => feature.selectedCardId
);

export const selectCards = createSelector(
    selectCardsFeature,
    (feature) => feature.cards
);

export const selectCard = createSelector(
    selectOpenedCard,
    selectCards,
    (id, cards) => cards.filter(card => card.id === id)
);