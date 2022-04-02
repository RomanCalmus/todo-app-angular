import { createReducer, on, State } from "@ngrx/store";
import { Card } from "src/app/models/card.model";
import { openCardWindow, closeCardWindow } from "./card.window.actions";

export const initialState:  any = undefined;

export const cardWindowReducer = createReducer(
    initialState,
    on(openCardWindow, (state, {card}) => card ),
    on(closeCardWindow, (state) => undefined)
);