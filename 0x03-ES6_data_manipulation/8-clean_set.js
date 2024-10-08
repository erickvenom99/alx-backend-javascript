function cleanSet(set, startString) {
  const filteredSet = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      filteredSet.push(value.substring(startString.length));
    }
  }
  return filteredSet.join('-');
}
export default cleanSet;
