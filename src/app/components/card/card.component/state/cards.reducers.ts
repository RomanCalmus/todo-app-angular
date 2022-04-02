import { createReducer, on } from "@ngrx/store";
import { Card } from "../../../../models/card.model";
import { createCard, getCardsList, removeCard, selectCardAction } from "./card.actions";
import { Cards, CardsFeature } from "./card.selectors";

export const initialState: CardsFeature = {cards: [], selectedCardId: -1};

export const cardsFeatureReducer = createReducer(
    initialState,
    on(getCardsList, (state, {cards}) => { return {...state, cards} }),
    on(selectCardAction, (state, {card}) => { return {...state, selectedCardId: card.id} }),
    //on(createCard...)
    //on(removeCard)
);