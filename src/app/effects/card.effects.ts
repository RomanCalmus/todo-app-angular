import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, Observable, of } from "rxjs";
import { getCardsList } from "../components/card/card.component/state/card.actions";
import { CardsListService, CardsListEvents} from "../services/cards-list.service";

@Injectable()
export class CardEffects  {
    constructor(
        private actions$: Actions,
        private cardService: CardsListService) {}

    loadCards$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CardsListEvents.LoadCards),
            mergeMap(() => this.cardService.getCards().pipe(
                    map(cards => (getCardsList({cards}))),
                    catchError(() => of({type: CardsListEvents.LoadedError}))
                ))
            )
        );
    
    removeCard$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CardsListEvents.RemoveCard),
            exhaustMap( (action: any) => {
                return this.cardService.removeCard(action.card).pipe(
                    map(_ => ({ type: CardsListEvents.LoadCards })),
                    catchError(() => of({type: CardsListEvents.LoadedError}))
                )
            })
        )
    );

    createCard$ = createEffect(() => 
        this.actions$.pipe(
            ofType(CardsListEvents.CreateCard),
            exhaustMap( (action: any) => {
                return this.cardService.createCard(action.card).pipe(
                    map(_ => ({ type: CardsListEvents.LoadCards })),
                    catchError(() => of({type: CardsListEvents.CreateCardError}))
                )
            })
        )
    );
}