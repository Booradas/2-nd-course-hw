//--------------------------------------------------task 1--------------------------------------------------
// let password = 'Пароль';
// let askTheUser = prompt('Введите пароль');
// askTheUser === password ? alert('Пароль введен верно') : alert('Пароль введен неправильно');

//--------------------------------------------------task 2--------------------------------------------------
let c = 2;
c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

//--------------------------------------------------task 3--------------------------------------------------
let d = 30;
let e = 100;
d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');
//--------------------------------------------------task 4--------------------------------------------------
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//--------------------------------------------------task 5--------------------------------------------------
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 1 || 2 || 12 :
        console.log('Winter'); 
        break;
    case 3 || 4 || 5 :
        console.log('Spring');     
        break;
    case 6 || 7 || 8 :
        console.log('Summer');
        break;
    case 9 || 10 || 11 :
        console.log('Autumn');
        break;
    default:
        console.log("There is no such month");
        break;
}
//--------------------------------------------------task 6--------------------------------------------------


//--------------------------------------------------task 7--------------------------------------------------
let userNumber = Number(prompt('Пожалуйста, введите любое число'));
console.log(isNaN(userNumber));
userNumber % 2 === 0 ? alert('Число четное') : alert('Число нечетное');

//--------------------------------------------------task 8--------------------------------------------------
let clientOS = Number(prompt('Если у вас Android введите 1 или 0 если у вас IOS'));
switch (clientOS) {
    case 1:
        console.log('Установите версию приложения для Android по ссылке');
        break;
    case 0:
        console.log('Установите версию приложения для iOS по ссылке');
        break;

    default:
        console.log('Вы ввели неверное число');
        break;
}

//-------------------------------------------------task 9.0-------------------------------------------------
let clientDeviceYear = Number(prompt('Введите год выпуска вашего телефона'));
if (clientDeviceYear < 2015 && clientOS === 1) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
}
else if (clientDeviceYear < 2015 && clientOS === 0) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
}
else if (clientDeviceYear >= 2015 && clientOS === 0) {
    console.log('Установите наше приложение для iOS по ссылке');
}
else if (clientDeviceYear >= 2015 && clientOS === 1) {
    console.log('Установите наше приложение для Android по ссылке');
}
else {
    console.log('Вы ввели неверное значение');
};