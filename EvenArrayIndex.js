function findEvenIndex(arr)
{
  for (let i = 0; i < arr.length; i++) {
    let leftSum = arr.rangeSum(0, i);
    let rightSum = arr.rangeSum(i + 1, arr.length);
    
    if (leftSum === rightSum) {
      return i;
    }
  }
  
  return -1;
}

Array.prototype.rangeSum = function(start, end) {
  if (start === end) {
    return;
  }
  return this.slice(start, end).reduce((a, b) => a + b);
}
