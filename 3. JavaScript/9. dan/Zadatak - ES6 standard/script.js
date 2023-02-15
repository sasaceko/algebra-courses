'use strict'

// 1.
var a = 78;
var b = 34;
// delete a;
// delete window.b;
// myObject = {property1:1, property2:2, property3:1};

// 2.
const user = { name: 'Lorenzo', surname: 'Verdi' };
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
  {...user},
];

const x = users;
console.log(x)



// 3.
for (var i = 0; i < 10; i++) {
 setTimeout(function() {
   console.log('The number is ' + i);
 }, 1000);
}

console.log(i);
