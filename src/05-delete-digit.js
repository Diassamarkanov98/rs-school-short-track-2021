function deleteDigit(n) {
  const string = n.toString();
  for (let i = 0; i < string.length - 1; i++) {
    if (+string[i] < +string[i + 1]) {
      return +(string.slice(0, i) + string.slice(i + 1, string.length));
    }
  }
  return +(string.slice(0, string.length - 1));
}

module.exports = deleteDigit;
