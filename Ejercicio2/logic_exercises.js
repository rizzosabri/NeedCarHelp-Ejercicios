

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

function isPrime_numbers(n) {
    // Los números menores o iguales a 1 no son primos
    if (n <= 1) {
        return false;
    }

    // Los números 2 y 3 son primos
    if (n <= 3) {
        return true;
    }

    // Los números divisibles por 2 o 3 no son primos
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    // Verificar divisibilidad desde 5 hasta la raíz cuadrada del número
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;

}

function prime_numbers(n) {

    let result = [];

    for (let i = 1; i <= n; i++) {

        if (isPrime_numbers(i)) {
            result.push(i);

        }
    }

    return result

}




