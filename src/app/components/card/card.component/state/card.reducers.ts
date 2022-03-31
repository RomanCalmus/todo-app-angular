import { createReducer, on } from "@ngrx/store";
import { Card } from "../../../../models/card.model";
import { getCardsList } from "./card.actions";

export const initialState: ReadonlyArray<Card> = [];

export const cardsReducer = createReducer(
    initialState,
    on(getCardsList, (state, {cards}) => cards)
);