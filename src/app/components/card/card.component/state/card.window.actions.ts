import { createAction, props } from "@ngrx/store";
import { Card } from "src/app/models/card.model";

export const openCardWindow = createAction('[Card Windpw] Open Window', props<{card: Card}>());
export const closeCardWindow = createAction('[Card Windpw] Close Window');