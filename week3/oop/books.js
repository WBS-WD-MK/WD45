/*
💻 JS OOP – The Reading List 🌶️🌶️🌶️
An object-oriented book-list!
Create a class BookList
Create another class called Book
BookLists should have the following properties:
---------
An array of all the Books
Number of books marked as read
Number of books marked not read yet
A reference to the next book to read (book object)
A reference to the current book being read (book object)
A reference to the last book read (book object)
---------
Each Book should have several properties:
--------
Title
Genre
Author
Read (true or false)
Read date, can be blank, otherwise needs to be a JS Date() object
-------
Every Booklist should have a few methods:
-------
.add(book)
should add a book to the books list.
.finishCurrentBook()
should mark the book that is currently being read as “read”
Give it a read date of new Date(Date.now())
Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
---------
Booklists and Books might need more methods than that. Try to think of more that might be useful.
*/

class Book {
  constructor(title, genre, author, read = false, readDate = null) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
  }
}
class BookList {
  constructor() {
    this.books = [];
    this.readBooks = 0;
    this.unreadBooks = 0;
    this.currentBook = null;
    this.nextBookToRead = null;
    this.lastBookRead = null;
  }
  add(book) {
    this.books.push(book);
    if (book.read) {
      this.readBooks++;
      // this.readBooks +=1
    } else {
      this.unreadBooks++;
    }
    if (this.books.length === 1 && !this.currentBook) {
      this.currentBook = book;
    }
  }
  setCurrentBook(book) {
    if (this.books.includes(book)) {
      this.currentBook = book;
    } else {
      console.log('Book is not in the list!!!!');
      // this.add(book)
    }
  }
  finishCurrentBook() {
    this.currentBook.read = true;
    this.currentBook.readDate = new Date();
    this.lastBookRead = this.currentBook;
    this.currentBook = null;
    this.readBooks++;
    this.unreadBooks--;
    const unReadBooksList = this.books.filter(book => !book.read);
    if (unReadBooksList.length === 1) {
      this.currentBook = unReadBooksList[0];
      this.nextBookToRead = null;
    } else if (unReadBooksList.length > 1) {
      this.currentBook = unReadBooksList[0];
      this.nextBookToRead = unReadBooksList[1];
    }
  }
}
let bookList = new BookList();
let book1 = new Book("Harry Potter and the Sorcerer's Stone", 'Fantasy', 'J.K. Rowling');
let book2 = new Book('The Lord of the Rings', 'Fantasy', 'J.R.R. Tolkien');

bookList.add(book1);
bookList.add(book2);
// bookList.setCurrentBook(book1);
bookList.finishCurrentBook();
console.log(bookList);
