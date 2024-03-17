//--------------------------------------------------task 1--------------------------------------------------

const peoples = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
console.log(peoples.sort((a, b) => a.age - b.age ));

//--------------------------------------------------task 2--------------------------------------------------
function isPositive(value) {
    return value > 0
}
function isMale(obj) {
    return obj.gender === 'male'
}
function filter(arr, callback) {
    const filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filterArr.push(arr[i])
        }
        
    }
    return filterArr;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));



//--------------------------------------------------task 3--------------------------------------------------

const dataLog = () => {
   const interval = setInterval(() => {
      console.log(new Date);
   }, 1000 * 3);

   setTimeout(() => {
   clearInterval(interval);
      console.log('30 секунд прошло')
   }, 1000 * 30)
};

dataLog();

//--------------------------------------------------task 4--------------------------------------------------


function delayForSecond(callback) {
    const timerOne = setTimeout(() => callback(), 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})


//--------------------------------------------------task 5--------------------------------------------------

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
