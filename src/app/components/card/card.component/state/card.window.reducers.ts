import { createReducer, on, State } from "@ngrx/store";
import { Card } from "src/app/models/card.model";
import { cloeCardWindow, openCardWindow } from "./card.actions";

export type cardWindowState = {card?: Card, isOpen: boolean};
export const initialState: cardWindowState = { isOpen: false };

export const cardWindowReducer = createReducer(
    initialState,
    on(openCardWindow, (state, {card}) => { return {isOpen: true, card} }),
    on(cloeCardWindow, (state) => { return {isOpen: false} })
);