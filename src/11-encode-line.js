function encodeLine(str) {
  const x = [];
  let y = 1;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== str[i - 1]) {
      x.push(str[i]);
      if (y !== 1) {
        x.push(y);
      }
      y = 1;
    } else {
      y++;
    }
  }
  return x.reverse().join('');
}

module.exports = encodeLine;
