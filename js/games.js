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
};

const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
const rememberTheWords = () => {
    let sortWords = words.sort(func);
    function func() {
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