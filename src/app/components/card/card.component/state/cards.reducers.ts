import { createReducer, on } from "@ngrx/store";
import { getCardsList, removeCardAction } from "./card.actions";
import { CardsFeature } from "./card.selectors";

export const initialState: CardsFeature = {cards: []};

export const cardsFeatureReducer = createReducer(
    initialState,
    on(getCardsList, (state, {cards}) => { return {cards} })
);