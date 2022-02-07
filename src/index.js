module.exports = function toReadable (number) {
  let str = number.toString();
  let i = str.charAt(0);
  let j = str.charAt(1);
  let k = str.charAt(2);
  for (let a = 0; a < str.length; a++) {
    let un = ['one', 'two', 'three', 'four','five', 'six', 'seven','eight', 'nine'];
    let dec = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let hun = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (str.length === 1 && i != 0) {
      return str = un[i-1];
    } if (str.length === 1) {
      return str = 'zero'}
    if (str.length === 2 && j == 0) {
      return str = hun[i - 1];
    } if (str.length === 2 && i == 1) {
      return str = dec[j - 1];
    } if (str.length === 2) {
      return str = hun[i - 1] + " " + un[j - 1];
    } if (str.length === 3 && j == 0 && k == 0) {
      return str = un[i - 1] + " hundred";
    } if (str.length === 3 && k == 0) {
      return str = un[i - 1] + " hundred " + hun[j - 1];
    } if (str.length === 3) {
      if (j == 0) {
       return str = un[i - 1] + " hundred " + un[k - 1];   
      } else if (j == 1) {
        return str = un[i - 1] + " hundred " + dec[k - 1];
      } else {
        return str = un[i - 1] + " hundred " + hun[j - 1] + " " + un[k - 1];
      }
    }
  }
}
