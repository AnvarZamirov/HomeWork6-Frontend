// Задача 1:
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Четное";
    } else {
        return "Нечетное";
    }
}

// Задача 2:
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

// Задача 3:
function findMax(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Задача 4: Подсчет числа гласных в строке
function countVowels(str) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

// Задача 6:
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));

console.log(factorial(5));
console.log(factorial(0));

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-5, -1, -8]));

console.log(countVowels("hello"));
console.log(countVowels("world"));

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, -2, 3]));
