document.getElementById('calculate-button').addEventListener('click', function(){
    //get the amount of income
    
const incomeField = document.getElementById('income-id');
const incomeMoneyText = incomeField.value;
const incomeMoney = parseInt(incomeMoneyText);

//get the amount of expense
const foodInput = document.getElementById('food-id');
const foodExpenseText = foodInput.value;
const foodExpense = parseInt(foodExpenseText);

const rentInput = document.getElementById('rent-id');
const rentExpenseText = rentInput.value;
const rentExpense = parseInt(rentExpenseText);

const clothesInput = document.getElementById('cloth-id');
const clothExpenseText = clothesInput.value;
const clothExpense = parseInt(clothExpenseText);

const newTotalExpense = foodExpense + rentExpense + clothExpense;

newTotalExpense.innerText = newTotalExpense;

//expenses
const expenseNew = document.getElementById('expense-id');
const expenseNewText = expenseNew.innerText;
expenseNew.innerText = newTotalExpense;

//balance
const balanceTotal = incomeMoney - newTotalExpense;
balanceTotal.innerText = balanceTotal;

const balanceNew = document.getElementById('balance-id');
const balanceNewText = balanceNew.innerText;
balanceNew.innerText = balanceTotal;

});
function balanceUpdate(){
    const balanceTotal = incomeMoney - newTotalExpense;
    balanceTotal.innerText = balanceTotal;

    const balanceNew = document.getElementById('balance-id');
    const balanceNewText = balanceNew.innerText;
    balanceNew.innerText = balanceTotal;

return balanceTotal;
}

document.getElementById('save-button').addEventListener('click', function(){
    //income
    const incomeField = document.getElementById('income-id');
    const incomeMoneyText = incomeField.value;
    const incomeMoney = parseInt(incomeMoneyText);
    

    const saveInput = document.getElementById('save-id');
    const saveMoneyText = saveInput.value;
    const saveMoney = parseInt(saveMoneyText);
    
    const savingsPercentage = saveMoney / 100;
    savingsPercentage.innerText = savingsPercentage;
    
    const savingsAmount = savingsPercentage * incomeMoney;
    savingsAmount.innerText = savingsAmount;
    console.log(savingsAmount);
//savings
    const savingNew = document.getElementById('save-id');
    const savingNewText = savingNew.innerText;
    savingNew.innerText = savingsAmount;

//balance remaining
    
    const remainingBalance = balanceUpdate - savingsAmount;
    remainingBalance.innerText = remainingBalance;
    

    const remainingBalanceNew = document.getElementById('remaining-id');
    const remainingBalancetext = remainingBalanceNew.innerText;
    remainingBalanceNew.innerText = remainingBalance;
    

});



