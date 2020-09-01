module.exports = function (source) {
  // 通过 this.query 接收 options 参数
  let _source = source.replace('world', this.query.name);
  return _source;
};
