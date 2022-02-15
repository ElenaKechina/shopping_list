import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {
  readonly oneAndOnly: boolean;
  public quantityInCart: number;

  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number
  ) {
    this.oneAndOnly = true;
    this.quantityInCart = 0;
  }
}
