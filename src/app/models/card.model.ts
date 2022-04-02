import { strOrNum } from "../misc/type.utils";
import { CardItem } from "./card-item.model";

export interface Card {
    id    : strOrNum,
    title : string,
    color : CardColor,
    items : CardItem[],
}


export type CardColor = 'yellow' | 'green' | 'red' | 'gray';
export const CardColors: Array<CardColor> = ['yellow', 'green', 'red', 'gray'];

export const PlaceholderTitle = 'Список без названия';