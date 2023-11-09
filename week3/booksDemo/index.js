const booksForm = document.querySelector('.books-form');
const booksList = document.querySelector('.books-list');
let books = [{ title: 'js is Fun', isRead: true, date: '20-10-2023' }];
// [{title:"Asdads",isRead:false,date:""},......]

// Local Storage

const saveToLocalStorage = () => {
  // {x,y}
  // {x:3,y:4}
  // {x;5}
  const stringifiedBooks = JSON.stringify(books);
  localStorage.setItem('books', stringifiedBooks);
};
//#1
const loadFromLocalStorage = () => {
  const parsedData = JSON.parse(localStorage.getItem('books'));
  console.log('🚀 ~ file: index.js:64 ~ data:', parsedData);

  // books = parsedData ? parsedData : [];
  if (parsedData) {
    books = parsedData;
  } else {
    books = [];
  }
  // # 2
  render();
};

const addBook = event => {
  event.preventDefault();
  const title = event.target.title.value;
  const date = event.target.date.value;
  if (title && date) {
    books.push({ title: title, isRead: false, date: date });
    saveToLocalStorage();
    render();
  } else {
    alert('Title and date are needed!!!');
  }

  event.target.reset();
};


const bookButtonHandler = () => {
  console.log('I was clicked!!!!');
};
//#3
const createBookEle = book => {
  // book => {title:"Asdads",isRead:false,date:""}
  const li = document.createElement('li');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const button = document.createElement('button');
  h2.textContent = book.title;
  p.textContent = book.date;
  button.textContent = 'clickMe';
  p.style.color = book.isRead ? 'green' : 'red';
  button.addEventListener('click', bookButtonHandler);
  li.append(h2);
  li.append(p);
  li.append(button);
  return li;
};
// #2
const render = () => {
  booksList.innerHTML = '';
  books.forEach(book => {
    console.log('BOOK??', book);
    // #3
    const listItem = createBookEle(book);
    booksList.append(listItem);
  });
};
// #0
booksForm.addEventListener('submit', addBook);
//render()

// #1
loadFromLocalStorage();
