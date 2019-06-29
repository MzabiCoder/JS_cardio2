tab = [
  'a',
  'b',
  'c',
  'd',
  'c',
  'a',
  'c',
  'd',
  'b',
  'c',
  'd',
  'd',
  'g',
  'k',
  'l',
  'k',
  'g',
  'c',
  'd',
  'g',
  'c',
  'd',
  'g'
];

let obj = {};

for (let val of tab) {
  if (obj[val]) {
    obj[val]++;
  } else {
    obj[val] = 1;
  }
}

let tab2 = [];

for (let val in obj) {
  tab2.push([val, obj[val]]);
}

console.log(tab2.sort((a, b) => b[1] - a[1])[0].join(':'));
