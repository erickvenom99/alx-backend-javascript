export default function cleanSet(set, startString) {
  if (startString == null || startString.length === 0) return '';

  const filteredArray = [];

  for (const value of set) {
    if (value && value.startsWith(startString)) {
      filteredArray.push(value.slice(startString.length));
    }
  }

  return filteredArray.join('-');
}
