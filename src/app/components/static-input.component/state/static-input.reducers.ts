import { createReducer, on } from "@ngrx/store";
import { editStaticInput, stopEditStaticInput } from "./static-input.actions";

export const initialState = false;

export const staticInputReducer = createReducer(
    initialState,
    on(editStaticInput, () => true),
    on(stopEditStaticInput, () => false)
);