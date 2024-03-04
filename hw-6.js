//--------------------------------------------------task 1--------------------------------------------------

// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//    console.log(numbs[i]);
//    if (numbs[i] == 10)
//       break;  
// }

//--------------------------------------------------task 2--------------------------------------------------

// const numbs = [1, 5, 4, 10, 0, 3];
// const position = numbs.indexOf(4);
// console.log(position);


//--------------------------------------------------task 3--------------------------------------------------
// const numbsArray = [1, 3, 5, 10, 20];
// const joinArray = numbsArray.join(' ');
// console.log(joinArray);
//--------------------------------------------------task 4--------------------------------------------------

// const multArr = [];
// for (let index = 0; index < 3 ; index++) {
//    multArr[index] = [];
//    for (let i = 0; i < 3; i++) {
//       multArr[index][i] = 1;
//    }
// }
// console.log(multArr);

//--------------------------------------------------task 5--------------------------------------------------

// const numbArr = [1, 1, 1];
// pushArr = numbArr.push(2, 2, 2);
// console.log(numbArr);

//--------------------------------------------------task 6--------------------------------------------------

// const sortArr = [9, 8, 7, 'a', 6, 5];
// const sortArray = sortArr.sort();
// const popArr = sortArr.pop();
// console.log(sortArr);

//--------------------------------------------------task 7--------------------------------------------------

// const userNumbArr = [9, 8, 7, 6, 5];
// const userNumb = () => {
//    let num = Number(prompt('Введите число'));
//    if (userNumbArr.includes(num)) {
//       alert('Угадал');
//    } else if (isNaN(num)) {
//       alert('Вы ввели не число');
//    } else {
//       alert('Не угадал');
//    }
// }
// userNumb();

//--------------------------------------------------task 8--------------------------------------------------

// const string = 'abcdef';
// const stringArr = string.split('');
// const reverseArr = stringArr.reverse();
// const joinStr = reverseArr.join('');
// console.log(joinStr);

//--------------------------------------------------task 9--------------------------------------------------

// const numbArrays = [
//    [1, 2, 3],
//    [4, 5, 6]
// ];
// const unionArrays = numbArrays.flat();
// console.log(unionArrays);

//--------------------------------------------------task 10--------------------------------------------------

// const numberArr = [];
// let summ = [];
// let l = 0;

// for (var i = 0; i < 10; i++) {
//     numberArr.push(Math.floor(Math.random()*11));
//   }

//   console.log(`Произвольный массив: ${numberArr}`);

//   for (let i = 0; i < numberArr.length; i++) {
//     if (i < numberArr.length - 1) {
//         summ[l] = numberArr[i] + numberArr[i + 1];
//         console.log(`Сумма элементов ${i} и ${i+1} равна ${summ[l]}`);
//         l++;
//     } else {
//         console.log(`Последний элемент равен ${numberArr[i]}`);
//     }
// }
  
//--------------------------------------------------task 11--------------------------------------------------
// const WholeNumbArr = [];

// for(let i = 0; i < 10; i++) {
//     WholeNumbArr.push(Math.floor(Math.random()*16));
// }

// console.log(`Произвольный массив: ${WholeNumbArr}`);

// let getSquaredNumbers = function(array) {

//     const squareArr = array.map(per => per ** 2);

//     return squareArr;
// }

// console.log(`Полученный массив: ${getSquaredNumbers(WholeNumbArr)}`);

//--------------------------------------------------task 12--------------------------------------------------

// const strArr = ['winter', 'spring', 'summer', 'autumn'];
// let strNewArr = [];
// function widthStrArr(x) {
//     return strNewArr = x.map((y) => y.length);
// }
// console.log(widthStrArr(strArr));

//--------------------------------------------------task 13--------------------------------------------------

// const negativeNumArr = [3, -5, 6, -35, 27, -2, -87, 10, -33];

// let negativeNumbers = function(arrNum) {
//     negativeArr = arrNum.filter(num => num < 0);
//     return negativeArr;
// }

// console.log(negativeNumbers(negativeNumArr));

//--------------------------------------------------task 14--------------------------------------------------

// const randomNumArr = [];
// const evenNumArr = [];
// let k = 0;

//     for(let i = 0; i < 10; i++) {
//         randomNumArr.push(Math.floor(Math.random()*11));
//     }

//     console.log(`Произвольный массив: ${randomNumArr}`);

//     for (let i = 0; i < randomNumArr.length; i++) {
//         if (randomNumArr[i] % 2 !== 0) {
//             continue;
//         } else {
//             evenNumArr[k] = randomNumArr[i];
//             k++;
//         }
//     }

//     console.log(`Новый массив: ${evenNumArr}`);

//--------------------------------------------------task 15--------------------------------------------------

// const randomNumbArr = []

// for(let i = 0; i < 6; i++) {
//     randomNumbArr.push(Math.floor(Math.random()*11));
// }

// console.log(`Произвольный массив: ${randomNumbArr}`);

// const sum = randomNumbArr.reduce((total, number) => total + number, 0);
// let midNum = sum / randomNumbArr.length;

// console.log(`Среднее арифметическое: ${midNum}`);

