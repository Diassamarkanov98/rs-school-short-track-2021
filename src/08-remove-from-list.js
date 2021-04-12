function removeKFromList(l, k) {
  let x = l;
  while (x.next !== null) {
    if (x.value === k) {
      x.value = x.next.value;
      x.next = x.next.next;
    } else {
      x = x.next;
    }
  }
  return l;
}

module.exports = removeKFromList;
