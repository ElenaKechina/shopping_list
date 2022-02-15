import Cart from './service/cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Films';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(
  new Movie(
    128,
    'Avergens',
    700,
    'Мстители',
    2012,
    'USA',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин./02:17'
  )
);

console.log(cart.items);
