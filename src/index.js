module.exports = function reverse (n) {
  return n.toString().replace(/\D/g,'').split('').reverse().join('');
}
