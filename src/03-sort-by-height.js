function sortByHeight(arr) {
  let value = arr;
  const index = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      index.push(i);
    }
  } value.sort((a, b) => (a - b));
  value = value.slice(index.length);
  for (let i = 0; i < index.length; i++) {
    value.splice(index[i], 0, -1);
  } return value;
}

module.exports = sortByHeight;
