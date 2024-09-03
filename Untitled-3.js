/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stk = []
    for (let st of s) {
        if (st === 'c') {
            if (stk.length >= 2 && stk[stk.length - 1] === 'b' && stk[stk.length - 2] === 'a') {
                stk.pop()
                stk.pop()
            } else {
                return false
            }

        } else {
            stk.push(st)
        }
    }

    return stk.length === 0

};