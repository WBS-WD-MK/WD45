String.prototype.formatWith = function (...args) {
  const stringArr = this.split(' ');
  const outputArr = [];
  stringArr.forEach((str, i) => {
    const myStr = str.split('');
    if (myStr[0] === '{') {
      const val = myStr[1];
      if (!args[val]) {
        outputArr.push(str);
      } else {
        outputArr.push(args[val]);
      }
    } else {
      outputArr.push(str);
    }
  });
  return outputArr.join(' ');
};

console.log('{0} + {0} = {1}'.formatWith('1', '2')); //=== '1 + 1 = 2';
console.log('Hello {0}'.formatWith('Codewars')); //=== 'Hello Codewars';
console.log('Testing {1}'.formatWith('kata')); // === 'Testing {1}'; // there is no arguments at position 1
