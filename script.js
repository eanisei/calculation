let money = 20000; 
let addExpenses = 'food, rent, having fun'; 
let deposit = false; 
let mission = 1000000; 
let period = 8;
let budgetDay = money/30;

 alert('Step 1 made');

 console.log('Congratulations');


 console.log(typeof money);
 console.log(typeof income);
 console.log(typeof deposit);

 console.log(addExpenses.length);

 console.log('Период равен ' + period + ' месяцев');
 console.log('Цель - заработать ' + mission + ' крон');


 addExpenses.toLowerCase();
 console.log(addExpenses.split(', '));

 console.log(Math.round(budgetDay));


let question = prompt('Ваш месячный доход?');
money = Number(question);

let question2 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses = Array(question2.split(', '));

/* Тут конечно можно было бы сделать If else если кнопка да нет. 
Но так как это не входные параметры с ответа кнопки, мануально введенные слова
(Это если писать через prompt) то пототм еще куча будет мороки с распознованием символов
*/
let question3 = confirm('Есть ли у вас депозит в банке?');
deposit = Boolean(question3);

console.log(deposit);

let expenses1, 
expenses2,
amount1,
amount2


    for(let i = 0; i < 2; i++) {

       let expenses = prompt('Введите обязательную статью расходов?');

        if (i === 1) {
            expenses1 = String(expenses);
            console.log(expenses1);
        } else {
            expenses2 = String(expenses);
            console.log(expenses2);
        }
 
   
    }
 
    for(let a = 0; a < 2; a++) {

        let amount = prompt('Во сколько это обойдется?');
 
         if (a === 1) {
            amount1 = Number(amount);
             console.log(amount1);
         } else {
            amount2 = Number(amount);
             console.log(amount2);
         }
  
    
     }



let budgetMonth = money-(amount1+amount2);
console.log('Бюджет на месяц: ' + (budgetMonth));


period = mission / budgetMonth;
console.log('Цель будет достигнута за ' + Math.round(period) + ' месяцев(-а)');


budgetDay = budgetMonth/30;
console.log('Бюджет на день: ' + Math.floor(budgetDay));



if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
}