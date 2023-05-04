
function getInputValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputString = inputElement.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}


document.getElementById('expenses-btn').addEventListener('click', function () {
    const foodCost = getInputValueById('food');
    const rentCost = getInputValueById('rent');
    const clothesCost = getInputValueById('clothes');
    const totalExpensesCost = foodCost + rentCost + clothesCost;
    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpensesCost;


    const income = getInputValueById('income');
    const newBalance = income - totalExpensesCost;
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = newBalance;
})

document.getElementById('saving-btn').addEventListener('click', function () {
    const savings = getInputValueById('saving-input');
    const newSavings = savings / 100;

    const balanceElement = document.getElementById('balance');
    const balanceElementString = balanceElement.innerText;
    const previousNewBalance = parseFloat(balanceElementString);

    const savingAmount = previousNewBalance * newSavings;

    const savingAmountElement = document.getElementById('saving-amount');
    savingAmountElement.innerText = savingAmount;

    const remainingBalanceElement = document.getElementById('remaining-balance');
    const previousRemainingBalance = previousNewBalance - savingAmount;
    remainingBalanceElement.innerText = previousRemainingBalance;
})