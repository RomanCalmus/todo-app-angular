import { createReducer, on, State } from "@ngrx/store";
import { openCardWindow, closeCardWindow } from "./card.window.actions";

export const initialState: boolean = false;

export const cardWindowReducer = createReducer(
    initialState,
    on(openCardWindow, (state) => true),
    on(closeCardWindow, (state) => false)
);