// 1. (problem 2)
const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) return num1;
    else if (num2 > num1 && num2 > num3) return num2;
    else if (num3 > num1 && num3 > num2) return num3;
  }
//console.log(maxOfThree(2, 10, 18));
  
  
// 2. (problem 3)
  function isCharAVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char)) return true;
    return false;
  }
//console.log(isCharAVowel('t'));
  
  
  // 3. (problem 4)
  const sumArray = (numbers) => {
    let total = numbers[0];
    for (let i = 1; i < numbers.length; i++) total += numbers[i];
    return total;
  }
  //const array = [20, -1];
  //console.log(sumArray(array));
  
  
  // 4. (problem 5)
  function multiplyArray(numbers) {
    let total = numbers[0];
    for (let i = 1; i < numbers.length; i++) total *= numbers[i];
    return total;
  }
  //const array = [2, 3, 5];
  //console.log(multiplyArray(array));
  
  
  // 5. (problem 6)
  const numArgs = function() {
    return arguments.length;
  }
  //console.log(numArgs('one', 'two'));
  
  
  // 6. (problem 7)
  function reverseString(string) {
    return string.split("").reverse().join("");
  }
  //console.log(reverseString('rockstar'));
  