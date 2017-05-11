function pigIt(str){
  let words = str.split(' ');
  
  return words.map((word) => {
    return `${word.substring(1)}${word[0]}ay`;
  }).reduce((a, b) => a + ' ' + b);
}
