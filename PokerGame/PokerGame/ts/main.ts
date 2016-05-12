import {CardDal} from './dataAccess/CardDal';
import {Card} from './model/Card';
import {CardSuite} from './model/CardSuite';
import {CardFace} from './model/CardFace';
document.body.innerHTML = "<image src='" + CardDal.getCardPNGImage({ suite: CardSuite.Clubs, face: CardFace.Ace }) + "'/>";