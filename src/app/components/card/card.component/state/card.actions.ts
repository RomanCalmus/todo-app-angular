import { createAction, props } from "@ngrx/store";
import { Card } from "../../../../models/card.model";

export const addCard = createAction('[Card Input] Add Card', props<{id: string}>());
export const removeCard = createAction('[Card Collection] Remove Card', props<{id: string}>());

export const getCardsList = createAction('[Card Collection/API] Get Cards Collection',
     props<{cards: ReadonlyArray<Card>}>());