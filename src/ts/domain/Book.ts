import Buyable from './Buyable';

/**
 * @module user
 */

/**
 * Load user info by id
 *
 * @param {number} id user id
 * @returns {Object} user info
 */
export default class Book implements Buyable {
  readonly oneAndOnly: boolean;
  public quantityInCart: number;
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly pages: number
  ) {
    this.oneAndOnly = true;
    this.quantityInCart = 0;
  }
}
