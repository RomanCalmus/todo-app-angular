import { createAction, props } from "@ngrx/store";
import { Card } from "../../../../models/card.model";

export const addCard = createAction('[Card Input] Add Card', props<{id: string}>());
export const removeCard = createAction('[Card Collection] Remove Card', props<{id: string}>());
export const openCardWindow = createAction('[Card Windpw] Open Window', props<{card: Card}>());
export const cloeCardWindow = createAction('[Card Windpw] Close Window');

export const getCardsList = createAction('[Card Collection/API] Get Cards Collection',
     props<{cards: ReadonlyArray<Card>}>());