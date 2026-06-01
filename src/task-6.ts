/* Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
Додай явну типізацію дженериків у виклики функцій.
Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу. */

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement([1, 2, 3]); // 1
getFirstElement(["a", "b", "c"]); // "a"
getFirstElement([true, false, true]); // true

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([true, false, true])); // true
