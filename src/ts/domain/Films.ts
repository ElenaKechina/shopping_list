import Buyable from './Buyable';

export default class Movie implements Buyable {
  readonly oneAndOnly: boolean;
  public quantityInCart: number;

  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly localizedName: string,
    readonly year: number,
    readonly country: string,
    readonly genre: string[],
    readonly time: string
  ) {
    this.oneAndOnly = true;
    this.quantityInCart = 0;
  }
}
