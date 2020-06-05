let money = 700;   //“Доход за месяц”
console.log(money + " $" + " Доход за месяц");
console.log(typeof money);


let income ='Курьер';       //строка с дополнительными доходом(например: фриланс),
console.log(income + ' Подработка');
console.log(typeof income);

let addExpenses ='Такси, Проживание, Питание, Канцелярские предметы, '; //строка с перечислением дополнительных расходов через запятую(например: интернет, такси, коммуналка)
console.log(addExpenses.length);

let changeExpenses = addExpenses;
console.log( changeExpenses.toLowerCase());
console.log(addExpenses.split(', '));


let deposit = true;//любое булево значение,
console.log(deposit);
console.log(typeof deposit);

let mission = 5000 ; //любое число(Какую сумму хотите накопить),

let period = 5;//число от 1 до 12(месяцев)

console.log( mission + ' евро, за ' + period  + ' месяцев');



let budgetDay = money / 30;
console.log(budgetDay + " $");