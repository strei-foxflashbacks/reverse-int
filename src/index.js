module.exports = function reverse (n) {
    const numArr = n > 0 ? (n + '').split('') : (n - (n * 2) + '').split('')
    return parseInt(numArr.reverse().join(''))
}
