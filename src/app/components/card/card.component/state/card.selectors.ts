import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Card } from "../../../../models/card.model";
import { cardWindowState } from "./card.window.reducers";

export const selectCards = createFeatureSelector<ReadonlyArray<Card>>('cards');
export const selectCardWindow = createFeatureSelector<cardWindowState>('cardWindow');

export const selectCard = createSelector(
    selectCards,
    (cards: ReadonlyArray<Card>, id: number) => cards.filter((card: Card) => card.id === id)
);
