const sayHello = () => {
  return new Promise((resolve, reject) => {
    console.log('hello');
    resolve();
  });
};

sayHello();
