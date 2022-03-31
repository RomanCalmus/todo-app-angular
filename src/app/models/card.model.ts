export interface Card {
    id    : number,
    title : string,
    //tags  : string[],
    color : CardColor
}

export type CardColor = 'yellow' | 'green' | 'red' | 'gray';
export const CardColors: Array<CardColor> = ['yellow', 'green', 'red', 'gray'];