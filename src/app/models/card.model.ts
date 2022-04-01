export interface Card {
    id    : number,
    title : string,
    color : CardColor,
    items : CardItems,
}

export interface CardItem {
    id?  : number,
    text: string,
    done: boolean
}

export type CardItems = ReadonlyArray<CardItem>;

export type CardColor = 'yellow' | 'green' | 'red' | 'gray';
export const CardColors: Array<CardColor> = ['yellow', 'green', 'red', 'gray'];