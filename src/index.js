module.exports = function reverse (n) {
  let result = 0;

  while (n > 0){
    rightMost = n % 10;
    result = result * 10 + rightMost;
    n = Math.floor(n/10);
  }
  return result;
}
