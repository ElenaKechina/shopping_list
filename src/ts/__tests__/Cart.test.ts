import Book from '../domain/Book';
import Movie from '../domain/Films';
import Gadget from '../domain/Gadget';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('card should return items', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(
    128,
    'Avergens',
    700,
    'Мстители',
    2012,
    'USA',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин./02:17'
  );

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  expect(cart.items).toEqual([book, musicAlbum, movie]);
});

test('card should return delete item', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(
    128,
    'Avergens',
    700,
    'Мстители',
    2012,
    'USA',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин./02:17'
  );

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  cart.deleteItem(1001);

  expect(cart.items).toEqual([musicAlbum, movie]);
});

test('card should return discounted total', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(
    128,
    'Avergens',
    700,
    'Мстители',
    2012,
    'USA',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин./02:17'
  );

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);

  expect(cart.getSumPricesDiscount(5)).toEqual(3420);
});

test('card should add item', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const iphone = new Gadget(345, 'IPhone', 30000);

  cart.add(book);
  cart.add(book);
  cart.add(book);

  expect(cart.getSumPrices()).toEqual(2000);

  cart.add(musicAlbum);
  cart.add(iphone);
  cart.add(iphone);
  cart.add(iphone);

  expect(cart.getSumPrices()).toEqual(92900);
});

test('card should subtract item', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const iphone = new Gadget(345, 'IPhone', 30000);

  cart.add(book);
  cart.add(musicAlbum);
  cart.add(iphone);
  expect(iphone.quantityInCart).toEqual(1);
  cart.add(iphone);
  expect(iphone.quantityInCart).toEqual(2);
  cart.add(iphone);
  expect(iphone.quantityInCart).toEqual(3);

  expect(cart.getSumPrices()).toEqual(92900);

  cart.subtract(345);
  expect(cart.getSumPrices()).toEqual(62900);

  cart.subtract(345);
  cart.subtract(345);
  expect(cart.getSumPrices()).toEqual(2900);
  expect(iphone.quantityInCart).toEqual(0);

  cart.subtract(1001);
  expect(cart.getSumPrices()).toEqual(2900);
});
