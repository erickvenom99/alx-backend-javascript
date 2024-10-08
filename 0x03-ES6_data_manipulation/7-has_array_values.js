function hasValuesFromArray(set, array) {
  for (const entry of array) {
    if (!set.has(entry)) {
      return false;
    }
  }
  return true;
}
export default hasValuesFromArray;
