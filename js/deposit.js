document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const NewdepositAmountString = depositField.value;
    const NewdepositAmount = parseFloat(NewdepositAmountString);
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousdepositTotalString = depositTotalElement.innerText;
    const PreviousdepositTotal = parseFloat(PreviousdepositTotalString);
    depositField.value = '';
    if (isNaN(NewdepositAmount)) {
        alert("Please provide a valid number");
        return;
    }
    const currentDepositTotal = PreviousdepositTotal + NewdepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = PreviousBalanceTotal + NewdepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})