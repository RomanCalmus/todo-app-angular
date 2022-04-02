import { BehaviorSubject } from "rxjs";

export interface CardItem {
    id?  : number,
    text: string,
    done: boolean
}

export type CardItems = CardItem[];