/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
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
