function getSumOfDigits(n) {
  let number = n;
  let total = 0;
  let summary = 0;
  number = number.toString().split('');
  for (let i = 0; i < number.length; i++) {
    summary += parseInt(number[i], 10);
  }
  if (summary > 9) {
    summary = summary.toString().split('');
    for (let i = 0; i < summary.length; i++) {
      total += parseInt(summary[i], 10);
    } return total;
  } return summary;
}

module.exports = getSumOfDigits;
