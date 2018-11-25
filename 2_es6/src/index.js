const getNum = () => {
  return 233;
};

let num = getNum();

console.log(num);

// es6 方法

let index = [1, 2, 3, 4].findIndex(item => {
  return item === 3;
});

console.log(index);
