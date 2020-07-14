// 完整引入 polyfill
// 如果需要按需引入，在 presets 配置中配置 useBuiltIns: 'usage'
import '@babel/polyfill';

const sayHello = () => {
  return new Promise((resolve, reject) => {
    console.log('hello');
    resolve();
  });
};

sayHello();
