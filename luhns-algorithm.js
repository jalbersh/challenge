var Luhns = function(input) {
    this.input = input
}

Luhns.prototype.sum = function() {
    var digits = this.input.split('')
    console.log('digits='+digits)
    sum = 0
    ctr = 0
    for (var i=digits.length-1;i>=0;i--) {
        var digit = digits[i]
        if (!isNaN(digit)) {
            if (ctr % 2 == 0) {
                console.log('adding digit=' + digit)
                sum += parseInt(digit)
            } else {
                var val = parseInt(digit)
                val *= 2
                if (val > 9) {
                    sum += 1 + (val % 10)
                } else {
                    sum += val
                }
            }
        } else if (i != digits.length-1) {
            throw new Error('Not a digit')
        }
        ctr++
    }
    return sum
}

Luhns.prototype.checkDigit = function() {
    var num = this.sum()*9
    num = num % 10
    return num
}

Luhns.prototype.validate = function(input) {
    this.input = input
    return this.sum() % 10 == 0
}

module.exports = Luhns;

