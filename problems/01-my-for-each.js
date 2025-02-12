/*
Write a function called `myForEach` that behaves like the `Array.forEach`
method.
*/

// Your code here 



const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3
  },
  {
    name: "Angela",
    yearsOfFriendship: 2
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6
  }
];

let myForEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    let el = array[i];
    cb(el, i, array);
  }
};

myForEach(friends, function(el, i) {
  console.log(el + " is at index " + i);
});

//let myForEach = (friends, friend => {
 // console.log(friend.name + ": " + friend.yearsOfFriendship + " years");
//});

/* prints:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = myForEach;
} catch {}
