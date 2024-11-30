module.exports = function calculateNumbers(a, b = 0) {
    const intA = Number(a);
    const intB = Number(b);
    if (Number.isNaN(intA) || Number.isNaN(intB)) {
        throw new TypeError('Both arguments must be numbers');
    }
    return Math.round(intA) + Math.round(intB);
}
