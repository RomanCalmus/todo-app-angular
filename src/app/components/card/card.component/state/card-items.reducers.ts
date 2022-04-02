import { createReducer, on } from "@ngrx/store";
import { CardItems } from "src/app/models/card-item.model";
import { createCardItem, getCardItems } from "./card-item.actions";

export const initialState:CardItems = [];

export const cardItemReducer = createReducer(
    initialState,
    // on(createCardItem, ( 
    //     (state, {card, item}) =>  {
    //         return card.items = [...state, item];
    //     })
))