import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectStaticInput = createFeatureSelector('staticInput');

// export const selectStaticInputTitle = createSelector(
//     selectStaticInput,
//         ()
//     )