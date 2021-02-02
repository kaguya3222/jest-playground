const Calculator = require('./Calculator')
const { isOdd } = require('./utils')

module.exports = {
    getSolution() {
        const number = new Calculator().sum(5, 5)
        return isOdd(number)
    }
}