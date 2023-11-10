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

const handleBookDelete = (li, book) => {
  books = books.filter(b => b.title !== book.title); // return all books 
  saveToLocalStorage();
  booksList.removeChild(li);
};
const handleUpdate = (li, h2, updateButton, book) => {
  const titleInput = document.createElement('input');
  const doneButton = document.createElement('button');
  doneButton.textContent = 'done';
  titleInput.type = 'text';
  titleInput.value = h2.textContent;
  doneButton.addEventListener('click', () => {
    const newTitle = titleInput.value;
    const oldTitle = book.title;
    h2.textContent = newTitle;
    books = books.map(b => {
      if (b.title === oldTitle) {
        return { ...b, title: newTitle };
        // return { title: newTitle, isRead: b.isRead, date: b.date };
      } else {
        return b;
      }
    });
    saveToLocalStorage();
    li.replaceChild(h2, titleInput);
    li.replaceChild(updateButton, doneButton);
  });

  li.replaceChild(titleInput, h2);
  li.replaceChild(doneButton, updateButton);
};
//#3
const createBookEle = book => {
  // book => {title:"Asdads",isRead:false,date:""}
  const li = document.createElement('li');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const deleteButton = document.createElement('button');
  const updateButton = document.createElement('button');
  h2.textContent = book.title;
  p.textContent = book.date;
  deleteButton.textContent = 'delete';
  updateButton.textContent = 'update';
  p.style.color = book.isRead ? 'green' : 'red';
  deleteButton.addEventListener('click', () => handleBookDelete(li, book));
  updateButton.addEventListener('click', () => handleUpdate(li, h2, updateButton, book));
  li.append(h2);
  li.append(p);
  li.append(deleteButton);
  li.append(updateButton);
  return li;
};
// #2
const render = () => {
  booksList.innerHTML = '';
  books.forEach(book => {
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
