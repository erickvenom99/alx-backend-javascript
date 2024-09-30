export default function appendToEachArrayValue(array, appendString) {
  const fillArray = [];
  for (const idx of array) {
    fillArray.push(appendString + idx);
  }
  return fillArray;
}
