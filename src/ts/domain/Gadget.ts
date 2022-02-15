import Buyable from './Buyable';

export default class Gadget implements Buyable {
  readonly oneAndOnly: boolean;
  public quantityInCart: number;

  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number
  ) {
    this.oneAndOnly = false;
    this.quantityInCart = 0;
  }
}
