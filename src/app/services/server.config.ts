type strOrNum = string | number;

export const baseUrl = 'http://localhost:3000';
export const cardsUrls = {
    cards: () => `${baseUrl}/cards`,
    card: (id: strOrNum) => `${cardsUrls.cards()}/${id}`,
}