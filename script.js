'use strict';


let money = 20000; 
let income = 'Freelance';
let addExpenses = 'food, rent, having fun'; 
let deposit = false; 
let mission = 1000000; 
let period = 8;
let budgetDay = money/30;


let isNumber = function(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
}

let showTypeOf = function(data) {
    console.log(data, typeof(data));
}


showTypeOf(typeof money);
showTypeOf(typeof income);
showTypeOf(typeof deposit);

 console.log('Период равен ' + period + ' месяцев');
 console.log('Цель - заработать ' + mission + ' крон');

   let start = function() {
       do {
           money = prompt('Ваш месячный доход?');
       }
        while (!isNumber(money));
   };

   start();


   let question2 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
   addExpenses = question2;
   console.log(addExpenses.toLowerCase().split(',' || ', ' || ' ,'));


let expensesq = [];
let sum;


//  Функция возвращает сумму всех обязательных расходов за месяц
    function getExpensesMonth() {

        for(let i = 0; i < 2; i++) {

        expensesq[i] = prompt('Введите обязательную статью расходов?');
        console.log(expensesq[i]);

        do {
            sum = prompt('Во сколько это обойдется?');
        } while(isNaN(parseFloat(sum)));

}

    return sum += sum;
}

getExpensesMonth();
//  Функция возвращает Накопления за месяц (Доходы минус расходы)

    function getAccumulatedMonth() {
        return money -= sum;
    }

    getAccumulatedMonth();  

// 3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 

    let accumulatedMonth = getAccumulatedMonth();

    
let getStatusIncome = function() {

    if (accumulatedMonth < 0 ) {
        return ('Цель не будет достигнута');
    }
    else {
        return ('Бюджет на месяц: ' + (accumulatedMonth));
    }
    
    period =  mission / accumulatedMonth;
    if(period < 0) {
        return ('Нужно выйти в + !');
    }
    else if(accumulatedMonth === 0) {
        return ('Нужно срочно копить денег и идти к достижению целей!'); 
    }
    else {
        return ('Цель будет достигнута за ' + Math.round(period) + ' месяцев(-а)');
    }
    
    budgetDay = budgetMonth / 30;
    
    if(budgetDay < 0 ) {
        return ('Вы должно быть в долгу!');
    } 
    else {
        return ('Бюджет на день: ' + Math.floor(budgetDay));
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
    
    }
    
    console.log(getStatusIncome());

// 4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат

    function getTargetMonth() {
        
        return accumulatedMonth /= period;
    }


// 6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)

    budgetDay = Math.round(accumulatedMonth / 30 );

    if(budgetDay > 0) {
    console.log(budgetDay);
    }
