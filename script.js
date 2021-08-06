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

   if (isNaN(question)) {
       prompt('Пожалуйста, введите число, иначе будет ошибка!');
   }

   money = question;

let question2 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses = question2;
console.log(addExpenses.split(',' || ', ' || ' ,'));

let question3 = confirm('Есть ли у вас депозит в банке?');
deposit = Boolean(question3);

let expensesq = [],amountq = [] 


    for(let i = 0; i < 2; i++) {

             expensesq[i] = prompt('Введите обязательную статью расходов?');
             amountq[i] = +prompt('Во сколько это обойдется?');
                console.log(expensesq[i]);
                console.log(amountq[i]);
    }

let budgetMonth = money-amountq[0 + 1];;
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




