function getDNSStats(domainsArray) {
  const res = {};
  domainsArray.forEach((domain) => {
    let subDomain = '';
    const revDomain = domain.split('.').reverse();
    revDomain.forEach((element) => {
      subDomain = `${subDomain}.${element}`;
      if (subDomain in res) {
        res[subDomain]++;
      } else {
        res[subDomain] = 1;
      }
    });
  });
  return res;
}

module.exports = getDNSStats;
