import { createAction, props } from "@ngrx/store";
import { Card } from "../../../../models/card.model";

export const selectCardAction = createAction('[Card] Select Card', props<{card: Card}>());
export const createCard = createAction('[Card Input] Create Card');
export const removeCard = createAction('[Card Collection] Remove Card', props<{card: Card}>());


export const getCardsList = createAction('[Card Collection/API] Get Cards Collection',
     props<{cards: Array<Card>}>());