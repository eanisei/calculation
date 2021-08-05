'use strict';


let money = 20000; 
let income = 'Freelance';
let addExpenses = 'food, rent, having fun'; 
let deposit = false; 
let mission = 1000000; 
let period = 8;
let budgetDay = money/30;


 console.log(typeof money);
 console.log(typeof income);
 console.log(typeof deposit);

 console.log('Период равен ' + period + ' месяцев');
 console.log('Цель - заработать ' + mission + ' крон');

let question = prompt('Ваш месячный доход?');

// Boolean(question);
// if(!isNaN()) {
//     money = question;
// } else {
//     question === false;
//     let valid = prompt('Введите доход числом!');

//     let i = valid === true ? 1 : 0;
//     console.log(i);

// }

// if(isNaN(question)) {
//    console.log(Boolean(!question));
//    alert('Введите доход числом!');

   if (isNaN(question)) {
       prompt('Пожалуйста, введите число, иначе будет ошибка!');
   }

   money = question;


let question2 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses = question2;
console.log(addExpenses.split(',' && ', '));

let question3 = confirm('Есть ли у вас депозит в банке?');
deposit = Boolean(question3);

let expenses1, 
expenses2,
amount1,
amount2


    for(let i = 0; i < 4; i++) {


        if (i === 0) {
            let expensesq1 = prompt('Введите обязательную статью расходов?');
            expenses1 = String(expensesq1);
            console.log(expenses1);
        } 
        

        if (i === 1) {
            let amountq1 = prompt('Во сколько это обойдется?');
            amount1 = Number(amountq1);
             console.log(amount1);
         }


        if (i === 2) {
            let expensesq2 = prompt('Введите обязательную статью расходов?');
            expenses2 = String(expensesq2);
            console.log(expenses2);
        }

 
        if (i === 3) {
            let amountq2 = prompt('Во сколько это обойдется?');
            amount2 = Number(amountq2);
            console.log(amount2);
        }
 
   
    }
 

let budgetMonth = money-(amount1+amount2);
if (budgetMonth < 0 ) {
    console.log('Вы должно быть в долгу!');
}
else {
console.log('Бюджет на месяц: ' + (budgetMonth));
}

period =  mission / budgetMonth;
if(period < 0) {
    console.log('Нужно выйти в + !');
}
else if(budgetMonth === 0) {
    console.log('Нужно срочно копить денег и идти к достижению целей!'); 
}
else {
console.log('Цель будет достигнута за ' + Math.round(period) + ' месяцев(-а)');
}

budgetDay = budgetMonth / 30;

if(budgetDay < 0 ) {
    console.log('Вы должно быть в долгу!');
} 
else {
    console.log('Бюджет на день: ' + Math.floor(budgetDay));
}



if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
}


//3) https://skr.sh/s9OMSZ4kLb7 - достижение цели не считается при любых данных


