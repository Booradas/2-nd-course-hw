//--------------------------------------------------task 1--------------------------------------------------
// const str = "js";
// const strToUpperCase = str.toUpperCase();
// console.log(strToUpperCase);


//--------------------------------------------------task 2--------------------------------------------------
const stringsArr = ["Зима - холодно", "Весна - тепло", "Лето - жарко", "Весна - 8 марта", "Осень - прохладно", "Прохладная весна"];
const str2 = "весна";
const stringArr = [];
const findStringInArr = (array, string) => {
    array.forEach((el) => {
        if (el.toLowerCase().startsWith(string.toLowerCase())) {
            stringArr.push(el);
        }
    });
    
}
findStringInArr(stringsArr, str2);
console.log(stringArr);



//--------------------------------------------------task 3--------------------------------------------------
const num1 = 32.58884;
console.log(Math.floor(num1));
console.log(Math.ceil(num1));
console.log(Math.round(num1));

//--------------------------------------------------task 4--------------------------------------------------
const num2 = [52, 53, 49, 77, 21, 32];
console.log(`Минимальное число: ${Math.min(...num2)}; Максимальное число: ${Math.max(...num2)}`);


//--------------------------------------------------task 5--------------------------------------------------

const randomNum = () => console.log(Math.floor(Math.random()*10) + 1);
randomNum();

//--------------------------------------------------task 6--------------------------------------------------
const randomNumb = Math.floor(Math.random() * 10) + 10;
const NumbArr = [];
const makeArr = (numb) => {
    for (let i = 0; i < numb/2; i++) {
      NumbArr[i] = Math.floor(Math.random() * numb);
   }
    return NumbArr;
}

console.log(makeArr(randomNumb));

//--------------------------------------------------task 7--------------------------------------------------
const numb1 = Math.floor(Math.random() * 10);
const numb2 = Math.floor(Math.random() * 15) + numb1 + 1;
const getRandNum = (number1, number2) => console.log(Math.floor(Math.random() * (number2 - number1)) + number1);
console.log(`Случайное число в диапазоне от ${numb1} до ${numb2}`);

getRandNum(numb2, numb2);



//--------------------------------------------------task 8--------------------------------------------------
const currDate = new Date();
console.log(currDate);


//--------------------------------------------------task 9--------------------------------------------------
const currentDate = new Date();
const options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const days = 73 * 24 * 60 * 60 * 1000;
const date = +currentDate;
const date2 = date + days;
const newDate = new Date(date2);
const afterSeventyThreeDays = newDate.toLocaleDateString('ru-RU', options2);
console.log(afterSeventyThreeDays);


//--------------------------------------------------task 10--------------------------------------------------
let date1 = new Date();
function rusDate(d) {
    let day = d.getDay();
    let date3 = d.getDate().toString().padStart(2, '0');
    let month = d.getMonth();
    let year = d.getFullYear();
    let hours = d.getHours().toString().padStart(2, '0');
    let minutes = d.getMinutes().toString().padStart(2, '0');;
    let seconds = d.getSeconds().toString().padStart(2, '0');;
    daysArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    monthArray = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return `Дата: ${date3} ${monthArray[month]} ${year} - это ${daysArray[day]}\nВремя: ${hours}:${minutes}:${seconds}`;
}

console.log(rusDate(date1));

//--------------------------------------------------task 11--------------------------------------------------

const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
const rememberTheWords = () => {
    let sortWords = words.sort(randomFunc);
    function randomFunc() {
        return 0.5 - Math.random();
    }
    alert(`Запомните слова: ${sortWords}`);
    let firstWord = prompt('Введите первое слово');
    if (firstWord.toLowerCase() === sortWords[0].toLowerCase()) {
        alert('Первое слово угадано верно, вы близки к победе!');
    }
    else {
        alert('Первое слово названо не верно!');
    }
    let secondWord = prompt('Введите последнее слово');
    if (secondWord.toLowerCase() === sortWords[sortWords.length - 1].toLowerCase()) {
        alert('Второе слово угадано верно!');
    }
    else {
        alert('Второе слово названо не верно');
    }
    if (firstWord.toLowerCase() === sortWords[0].toLowerCase() && secondWord.toLowerCase() === sortWords[sortWords.length - 1].toLowerCase()) {
        alert('Ура! Вы победили!');
    } else if (firstWord.toLowerCase() === sortWords[0].toLowerCase() && secondWord.toLowerCase() !== sortWords[sortWords.length - 1].toLowerCase()) {
        alert('К сожалению вы проиграли но были близки к победе!');
    } else if (firstWord.toLowerCase() !== sortWords[0].toLowerCase() && secondWord.toLowerCase() === sortWords[sortWords.length - 1].toLowerCase()) {
        alert('К сожалению вы проиграли но были близки к победе!');
    } else {
        alert('Вы проиграли!');
    }
}