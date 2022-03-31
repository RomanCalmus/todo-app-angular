import { createReducer, on } from "@ngrx/store";
import { closeCardInput, openCardInput } from "./card-input.actions";

export const initialState = false;

export const cardInputReducer = createReducer(
    initialState,
    on(openCardInput, () => true),
    on(closeCardInput, () => false)
);