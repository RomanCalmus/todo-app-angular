import { createReducer, on } from "@ngrx/store";
import { addCard, removeCard } from "./card.actions";

export const initialState: ReadonlyArray<string> = [];

export const cardCollectionReducer = createReducer(
    initialState,
    on(removeCard, (state, {id}) => state.filter(_id => id !== _id)),
    on(addCard, (state, {id}) => {
        if (state.indexOf(id) !== -1) return state;

        return [...state, id];
    })
);