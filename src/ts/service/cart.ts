import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(addItem: Buyable): void {
    const index = this._items.findIndex((item) => item.id === addItem.id);

    if (index === -1) {
      addItem.quantityInCart = 1;
      this._items.push(addItem);
      return;
    }

    if (this._items[index].oneAndOnly) {
      return;
    }

    this._items[index].quantityInCart += 1;
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getSumPrices(): number {
    return this._items.reduce(
      (acc, item) => acc + item.price * item.quantityInCart,
      0
    );
  }

  getSumPricesDiscount(discont: number): number {
    const sum = this.getSumPrices();

    return sum * (1 - discont / 100);
  }

  deleteItem(id: number): void {
    const index = this._items.findIndex((item) => item.id === id);
    this._items[index].quantityInCart = 0;
    this._items.splice(index, 1);
  }

  subtract(id: number): void {
    const index = this._items.findIndex((item) => item.id === id);

    if (this._items[index].oneAndOnly) {
      return;
    }

    if (this.items[index].quantityInCart === 1) {
      this.deleteItem(id);
      return;
    }

    this._items[index].quantityInCart -= 1;
  }
}
