import "@babel/polyfill";

let index = [1, 2, 3, 4].findIndex(item => {
  return item === 3;
});

console.log(index);
