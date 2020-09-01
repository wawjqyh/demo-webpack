import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  console.log(_.join(['Another', 'module', 'loaded!'], '-'));
});

import(/* webpackChunkName: "jquery" */ 'jquery').then(({ default: $ }) => {
  console.log($.trim('  233  '));
});
