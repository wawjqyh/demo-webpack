window.onload = function () {
  const btn = document.querySelector('#btn');

  btn.addEventListener('click', async () => {
    const { hello } = await import(/* webpackPrefetch: true */ './utils');
    hello();
  });
};
