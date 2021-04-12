function getCommonCharacterCount(s1, s2) {
  let firstValue = 0;
  let secondValue = s2;
  for (let i = 0; i < s1.length; i++) {
    if (secondValue.includes(s1[i])) {
      firstValue++;
      secondValue = secondValue.replace(s1[i], '');
    }
  }
  return firstValue;
}

module.exports = getCommonCharacterCount;
