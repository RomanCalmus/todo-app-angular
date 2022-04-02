import { BehaviorSubject } from "rxjs";
import { CardItem } from "./card-item.model";

export interface Card {
    id    : number,
    title : string,
    color : CardColor,
    items : CardItem[],
}


export type CardColor = 'yellow' | 'green' | 'red' | 'gray';
export const CardColors: Array<CardColor> = ['yellow', 'green', 'red', 'gray'];