import('lodash').then(({ default: _ }) => {
  console.log(_.join(['Another', 'module', 'loaded!'], '-'));
});

import('jquery').then(({ default: $ }) => {
  console.log($.trim('  233  '));
});
