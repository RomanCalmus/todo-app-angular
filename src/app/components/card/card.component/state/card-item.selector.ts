import { createSelector} from "@ngrx/store";
import { selectCards, selectCardsFeature } from "./card.selectors";

export const selectCardItems = createSelector(
    selectCards,
    (cards) => cards
);