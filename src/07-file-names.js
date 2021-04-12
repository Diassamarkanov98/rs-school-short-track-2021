function renameFiles(names) {
  const elements = names;
  for (let i = 0; i < elements.length; i++) {
    let F = 0;
    const checker = elements[i];
    for (let j = 0; j < elements.length; j++) {
      if (checker === elements[j]) {
        if (F === 0) {
          F++;
        } else {
          elements[j] += `(${F})`;
          F++;
        }
      }
    }
  }
  return elements;
}

module.exports = renameFiles;
