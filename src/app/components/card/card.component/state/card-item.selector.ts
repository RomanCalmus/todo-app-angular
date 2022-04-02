import { createSelector} from "@ngrx/store";
import { selectCard, selectCards, selectCardsFeature } from "./card.selectors";

export const selectCardItems = createSelector(
    selectCards,
    (cards) => cards
);