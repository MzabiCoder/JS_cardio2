str =
  'skfgh karim karim dsfk@jhadsf nabil nabil karim adsfks___addkfa dflakfak/w* karim hhhhhhh12hhhhhhhh#@hhhhhh)hhh adsfaidfaf karim #$ aliufaif nabil';

const tab = str.match(/[a-bA-Z]+/gi);

let obj = {};

for (let i = 0; i < tab.length; i++) {
  if (obj[tab[i]]) {
    obj[tab[i]]++;
  } else {
    obj[tab[i]] = 1;
  }
}
let sorted = [];
for (let val in obj) {
  sorted.push([obj[val], val]);
}

console.log(sorted.sort((a, b) => b[0] - a[0])[0]);
