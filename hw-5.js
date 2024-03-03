//--------------------------------------------------task 1--------------------------------------------------
// const theSmallerOfTwoNumbers = (a, b) => {
//    if (a < b) {
//       return a;
//    } else {
//       return b;
//    }
// };
// console.log(theSmallerOfTwoNumbers(2, 6));



//--------------------------------------------------task 2--------------------------------------------------
// const userNumber = () => {
//    let num = Number(prompt('Введите число:'));
//    if (num % 2 == 0) {
//       alert('Число четное');
//    } else {
//       alert('Число нечетное')
//    }
// }
// userNumber();

//--------------------------------------------------task 3--------------------------------------------------
// const square = () => {
//    let num = Number(prompt('Введите число:'));
//    let result = num ** 2;
//    console.log(`Квадрат числа ${num}: ${result}`);
//    return result;
// };
// square();

//--------------------------------------------------task 4--------------------------------------------------
// const userAge = () => {
//    let answer = Number(prompt('Сколько вам лет?'))
//    if (answer < 0) {
//       alert('Вы ввели неправильное значение');
//    } else if (answer <= 12) {
//       alert('Привет, друг!');
//    } else if (answer >= 13) {
//       alert('Добро пожаловать!');
//    } else {
//       alert('Вы ввели неправильное значение');
//    }
// }
// userAge();
//--------------------------------------------------task 5--------------------------------------------------
// const userNumbers = () => {
//    let num1 = Number(prompt('Введите первое число'))
//    let num2 = Number(prompt('Введите второе число'))
//    if (isNaN(num1) || isNaN(num2)) {
//       console.log('Одно или оба значения не являются числом');
//    } else {
//       console.log('Оба значения являются числом');
//    }
// }
// userNumbers();
//--------------------------------------------------task 6--------------------------------------------------
// const request = () => {
//    let requestNum = Number(prompt('Введите число'));
//    if (isNaN(requestNum)) {
//       console.log('Переданный параметр не является числом');
//    } else {
//       result = requestNum ** 3;
//       console.log(`${requestNum} в кубе равняется ${result}`);
//    }
// }
// request();
    
//--------------------------------------------------task 7--------------------------------------------------
// function getRectangleArea() {
//     return Math.PI * this.radius ** 2;
// }
// function getRectanglePerimeter() {
//     return Math.PI * 2 * this.radius ;
// }
// const circle1 = {
//     radius: 3,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// };

// const circle2 = {
//     radius: 5,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// };
// console.log(`Площадь круга:${circle1.getArea()}`);
// console.log(`Периметр круга:${circle1.getPerimeter()}`);
// console.log(`Площадь круга:${circle2.getArea()}`);
// console.log(`Периметр круга:${circle2.getPerimeter()}`);

//--------------------------------------------------task 8--------------------------------------------------
const mounthDefinition = () => {
    let monthNumber = Number(prompt('Введите число месяца'));
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('Winter');
            break;
        case 3:
        case 4:
        case 5:
            alert('Spring');
            break;
        case 6:
        case 7:
        case 8:
            alert('Summer');
            break;
        case 9:
        case 10:
        case 11:
            alert('Autumn');
            break;
        default:
            alert('Недопустимое число');
            break;
    }
}
















// function getRectangleArea() {
//     return this.width * this.height;
// }
// function getRectanglePerimeter() {
//     return this.width * 2 + this.height * 2;
// }
// const square1 = {
//     width: 4,
//     height: 5,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// };

// const square2 = {
//     width: 7,
//     height: 3,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter,
// };
// console.log(`Площадь прямоугольника:${square1.getArea()}`);
// console.log(`Периметр прямоугольника:${square1.getPerimeter()}`);
// console.log(`Площадь прямоугольника:${square2.getArea()}`);
// console.log(`Периметр прямоугольника:${square2.getPerimeter()}`);


///////
// Функция для расчета итоговой суммы вклада
// function calculateTotalAmount(principalAmount, timeInYears, interestRate = 5) {
//    let interest = principalAmount * (interestRate / 100) * timeInYears; // вычисляем проценты на вклад
//    return principalAmount + interest; // возвращаем итоговую сумму вклада
// }

// let totalAmount1 = calculateTotalAmount(10000, 1); // используем функцию для расчета итоговой суммы вклада в 10000 на 1 год
// console.log("Total amount after 1 year: " + totalAmount1); // выводим итоговую сумму вклада на консоль

// let totalAmount2 = calculateTotalAmount(20000, 2); // используем функцию для расчета итоговой суммы вклада в 20000 на 2 года
// console.log("Total amount after 2 years: " + totalAmount2); // выводим итоговую сумму вклада на консоль