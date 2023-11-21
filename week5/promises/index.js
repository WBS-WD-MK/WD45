function sum(a, b) {
  return new Promise((resolve, reject) => {
    const result = a + b;
    if (result % 2 === 0) {
      resolve(`${result} is EVEN NUMBER`);
    } else {
      reject(`${result} is ODD NUMBER`);
    }
  });
}
sum(4, 3)
  .then(response => console.log('EVEN', response))
  .catch(error => console.error('ODD??', error));
sum(4, 4)
  .then(response => console.log('EVEN', response))
  .catch(error => console.error('ODD??', error));

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => console.log('RESULT', data))
  .catch(error => console.error(error));
