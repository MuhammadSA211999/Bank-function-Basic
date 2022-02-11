function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const inputAmountText = inputField.value
    const inputAmount = parseFloat(inputAmountText)
    inputField.value = '';
    return inputAmount
}
function afterInputTotalis(totalId, dwAmount) {
    const totalField = document.getElementById(totalId)
    const totalFieldText = totalField.innerText
    const preTotalFieldAmount = parseFloat(totalFieldText)
    totalField.innerText = preTotalFieldAmount + dwAmount
}
function getCurrentBalance() {
    const updateAccount = document.getElementById('balance-total')
    const updateAccountText = updateAccount.innerText
    const updateAccountPreAmount = parseFloat(updateAccountText)
    return updateAccountPreAmount
}
function updateAccountTotal(amount, isAdd) {
    const updateAccount = document.getElementById('balance-total')
    const updateAccountPreAmount = getCurrentBalance()
    // const updateAccountText = updateAccount.innerText
    // const updateAccountPreAmount = parseFloat(updateAccountText)
    if (isAdd == true) {
        updateAccount.innerText = updateAccountPreAmount + amount
    }
    else {
        updateAccount.innerText = updateAccountPreAmount - amount
    }

}


document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input')
    if (newDepositAmount > 0) {
        const totalAmount = afterInputTotalis('deposit-total', newDepositAmount)
        updateAccountTotal(newDepositAmount, true)
    }

})
document.getElementById('widthdraw-btn').addEventListener('click', function () {
    const newWidthdrawAmount = getInputValue('widthdraw-input')
    const currentBalance = getCurrentBalance()
    if (newWidthdrawAmount > 0 && newWidthdrawAmount < currentBalance) {
        const totalAmount = afterInputTotalis('widthdraw-total', newWidthdrawAmount)
        updateAccountTotal(newWidthdrawAmount, false)
    }
    if (currentBalance < newWidthdrawAmount) {
        console.log('ydfsgdsadtwdfdtwad')
    }


})
