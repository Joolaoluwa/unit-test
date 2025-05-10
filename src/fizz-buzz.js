export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function calculateAverage(arr) {
  if (arr.length === 0) return NaN;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

export function factorial(number) {
  if (number === 0) return 1;
  if (number < 0) return "please enter a positive number";
  let result = 1;
  if (number > 0) {
    for (let i = number; i >= 1; i--) {
      result = i * result;
    }
    return result;
  }
}
