'use script';

/**
 * Функция складывание двух переменных
 */
function addition(a, b) {
    return a + b;
}
/**
 * Функция вычисления второй переменной из первой
 */
function computation(a, b) {
    return a - b;
}
/**
 * Функция деления первой переменной на вторую переменную
 */
function division(a, b) {
    return a / b;
}
/**
 * Функция умножения переменных
 */
function multiplication(a, b) {
    return a * b;
}



/**
 * Функция получает два числа и выполняет арифметическую операцию
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return computation(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Ошибка " + operation + " функции");
    }
}

console.log(mathOperation(2, 9, "+"));
console.log(mathOperation(2, 9, "-"));
console.log(mathOperation(2, 9, "/"));
console.log(mathOperation(2, 9, "*"));
