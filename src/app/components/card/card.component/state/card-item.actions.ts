import { createAction, props } from "@ngrx/store";
import { CardItem } from "src/app/models/card-item.model";
import { Card } from "src/app/models/card.model";

export const createCardItem = createAction('[Card Item] Create', props<{card: Card, item: CardItem}>());
export const removeCardItem = createAction('[Card Item] Remove', props<{card: Card, item: CardItem}>()); 
export const getCardItems   = createAction('[Card Item] Get Card Items', props<{cardId: number | string}>()); 