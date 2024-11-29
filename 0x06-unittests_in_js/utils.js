const calculateNumber = (type, a, b) => {
  const intA = Math.round(a);
  const intB = Math.round(b);

  switch (type) {
    case 'SUM':
      return intA + intB;
    default:
      throw new Error('Invalid type. Supported types are SUM.');
  }
};

export default {
  calculateNumber,
};
