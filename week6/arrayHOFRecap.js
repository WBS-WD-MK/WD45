//HOF?????
// ARRAY methods
const arr = [
  { id: 1, age: 18, name: 'john' },
  { id: 2, age: 30, name: 'jack' },
  { id: 3, age: 12, name: 'jane' },
  { id: 4, age: 5, name: 'jamie' },
  { id: 5, age: 23, name: 'jordan' },
];

// ForEach
// loop and return nothing!!!!
arr.forEach((ele, index) => {
  console.log(ele, index);
});
//Map
const newArr = arr.map((ele, index) => {
  // console.log(ele, index);
  if (ele.age < 18) {
    ele.age += 1;
  }
  return ele;
});
console.log(newArr);
// Filter
const oldPeople = arr.filter((ele, index) => {
  return ele.age >= 18;
});
console.log(oldPeople);
const john = arr.filter((ele, index) => {
  return ele.name.toLowerCase() === 'john' && ele.age >= 18;
});
console.log('WHERE ARE You John!!!!!', john);
// Reduce
const allAge = arr.reduce((acc, currentEle, index) => {
  acc += currentEle.age;
  return acc;
}, 0);
console.log(allAge);
const allNames = arr.reduce((acc, currentEle, index) => {
  acc = acc + ' ' + currentEle.name;
  return acc;
}, '');
console.log(allNames);
const newArrayNames = arr.reduce((acc, currentEle, index) => {
  acc.push(currentEle.name);
  return acc;
}, []);
console.log(newArrayNames);
// Some
// at least there is 1 or more match in the array
const olderThanFive = arr.some((ele, index) => ele.age < 5);
console.log(olderThanFive);
// Every
const olderThanFive2 = arr.every((ele, index) => ele.age > 6);
console.log(olderThanFive2);

// HW
// redo this using ONLY the old for loop
for (let i=0; i < arr.length; i++) {

}
