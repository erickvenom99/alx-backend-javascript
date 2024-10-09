const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let countPoint = weakMap.get(endpoint) || 0;
  countPoint += 1;
  weakMap.set(endpoint, countPoint);
  if (countPoint >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
