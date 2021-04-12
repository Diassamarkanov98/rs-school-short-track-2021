function isMAC48Address(n) {
  const elem = /^([0-9a-f]{2}[-]){5}([0-9a-f]{2})$/i;
  return elem.test(n);
}

module.exports = isMAC48Address;
