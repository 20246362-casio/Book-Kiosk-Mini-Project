import { Injectable, signal, computed } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
  image: string;
  selected?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = signal<Book[]>([
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 599,
      category: 'Self-Help',
      image: 'https://www.irustima.com/wp-content/uploads/2025/01/atomic-habits-james-clear-irustima.jpg'
    },
    {
      id: 2,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      price: 680,
      category: 'Non-Fiction',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0FxCfM-_t-RbeO2sctksNPeHO2cPndNQPLg&s'
    },
    {
      id: 3,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      price: 450,
      category: 'Fiction',
      image: 'https://cdn.kobo.com/book-images/5967e7fb-edc8-403b-9989-f8aab7b3ed89/1200/1200/False/the-alchemist-38.jpg'
    },
    {
      id: 4,
      title: '1984',
      author: 'George Orwell',
      price: 420,
      category: 'Fiction',
      image: 'https://www.penguin.co.uk/_next/image?url=https%3A%2F%2Fcdn.penguin.co.uk%2Fdam-assets%2Fbooks%2F9780141036144%2F9780141036144-jacket-large.jpg&w=614&q=100'
    },
    {
      id: 5,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 520,
      category: 'Fantasy',
      image: 'https://cdn.kobo.com/book-images/a821b502-0d07-4921-ac14-e431625d04e7/1200/1200/False/the-hobbit-illustrated-by-alan-lee.jpg'
    },
    {
      id: 6,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      price: 650,
      category: 'Fantasy',
      image: 'https://brightspotcdn.byu.edu/dims4/default/841f0c6/2147483647/strip/true/crop/500x762+0+0/resize/500x762!/quality/90/?url=https%3A%2F%2Fbrigham-young-brightspot-us-east-2.s3.us-east-2.amazonaws.com%2F41%2F71%2Fd7d439b4fbd9ccee241416bf8d5c%2Fsorcerors-stone.jpg'
    },
    {
      id: 7,
      title: 'Dune',
      author: 'Frank Herbert',
      price: 700,
      category: 'Sci-Fi',
      image: 'https://ashcliftonwriter.com/wp-content/uploads/2024/07/dunecover1.jpg?w=366'
    },
    {
      id: 8,
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      price: 550,
      category: 'Mystery',
      image: 'https://cdn.kobo.com/book-images/a9c3b7b5-d7b1-47d4-943a-2aa89e9fbd2d/1200/1200/False/the-silent-patient-1.jpg'
    },
    {
      id: 9,
      title: 'Sherlock Holmes',
      author: 'Arthur Conan Doyle',
      price: 500,
      category: 'Mystery',
      image: 'https://m.media-amazon.com/images/I/91dDv9WOcFL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 10,
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      price: 580,
      category: 'Self-Help',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDZW6oZmLfWrnt2RXcW6ij4T30adMeHFDuZw&s'
    },
    {
      id: 11,
      title: 'Ikigai',
      author: 'Hector Garcia',
      price: 490,
      category: 'Self-Help',
      image: 'https://nationalbookstore.com/cdn/shop/files/9780143130727.jpg?v=1773403754'
    },
    {
      id: 12,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      price: 530,
      category: 'Fiction',
      image: 'https://m.media-amazon.com/images/I/619ib7t-DAL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 13,
      title: 'Percy Jackson',
      author: 'Rick Riordan',
      price: 510,
      category: 'Fantasy',
      image: 'https://m.media-amazon.com/images/I/41HPJW7GblL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 14,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 430,
      category: 'Fiction',
      image: 'https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1'
    },
    {
      id: 15,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 470,
      category: 'Fiction',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg'
    }
  ]);

  cart = signal<Book[]>([]);

  cartCount = computed(() => this.cart().length);

  total = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );

  addToCart(book: Book) {

  if (!book.selected) {

    book.selected = true;

    this.cart.update(items => [...items, book]);

  } }
  removeFromCart(id: number) {
    this.cart.update(items =>
      items.filter(book => book.id !== id)
    );
  }

  clearCart() {

  this.books().forEach(book => {
    book.selected = false;
  });

  this.cart.set([]);

}
}