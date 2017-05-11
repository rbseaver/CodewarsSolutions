function expandedForm(num) {
  if (num < 10) {
    return num.toString();
  }
  
  const numbers = num.toString().split('');

  return numbers.reverse()
    .map((number, index) => number * Math.pow(10, index))
    .filter((p) => p > 0).reverse().join(' + ');

}
