import {Card} from '../model/Card'
export class CardDal {
    static getCardPNGImage(card: Card): string {
        return "./resource/cards/png/10_of_clubs.png";
    }

    static getCardSVGImage(card: Card): string {
        throw new Error("Not Implemented");
    }
}