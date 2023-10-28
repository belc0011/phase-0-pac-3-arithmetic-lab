function add(value1, value2) {
    return value1 + value2
}
function subtract(value1, value2) {
    return value1 - value2
}
function multiply(value1, value2) {
    return value1 * value2
}
function divide(value1, value2) {
    return value1 / value2
}
function increment(n) {
    n = n + 1
    return n
}
function decrement(n) {
    n = --n
    return n
}

function makeInt(string) {
    return parseInt(string, 10)
}

function preserveDecimal(n) {
    return parseFloat(n)
}
