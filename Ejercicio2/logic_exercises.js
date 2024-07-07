

function fibonacci(n) {

    let fibonacciArray = [];
    fibonacciArray.push(0, n)

    for (let i = 1; i <= n - 2; i++) {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i])
    }

    return fibonacciArray;
}

function isPalindrome(str) {
    let str2 = str.split('').reverse().join("")

    if (str == str2) {
        return true
    } else {
        return false
    }

}






