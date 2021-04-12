function getEmailDomain(email) {
  const array = email.split('@');
  return array[array.length - 1];
}

module.exports = getEmailDomain;
