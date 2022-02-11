document.getElementById('deposit-btn').addEventListener('click', function () {
    // depositInput section*******
    const depositInput = document.getElementById('deposit-input')
    const depositInputText = depositInput.value
    const depositInputAmount = parseFloat(depositInputText)
    // total section***
    const depositTotal = document.getElementById('deposit-total')
    const depositTotalText = depositTotal.innerText
    // pre deposit input value
    const preDepositTotalAmount = parseFloat(depositTotalText)
    // after newdeposit value
    const newDepositTotal = preDepositTotalAmount + depositInputAmount
    // total balance section****
    const balanceTotal = document.getElementById('balance-total')
    const preBlanceTotalText = balanceTotal.innerText
    const preBlanceTotalAmount = parseFloat(preBlanceTotalText)
    // after deposit
    const newBalanceTotalAmount = preBlanceTotalAmount + depositInputAmount
    balanceTotal.innerText = newBalanceTotalAmount
    depositInput.value = '';
})
document.getElementById('widthdraw-btn').addEventListener('click', function () {
    const widthdrawInput = document.getElementById('widthdraw-input')
    const widthdrawInputText = widthdrawInput.value
    const widthdrawAmount = parseFloat(widthdrawInputText)
    const widthdrawTotal = document.getElementById('widthdraw-total')
    const preWidthdrawTotalText = widthdrawTotal.innerText
    const preWidthdrawTotal = parseFloat(preWidthdrawTotalText)
    // after new widthdraw/
    const widthdrawTotalAmount = preWidthdrawTotal + widthdrawAmount
    widthdrawTotal.innerText = widthdrawTotalAmount
    // set total balance section after new widthdraw///
    // capture balancet total***
    const balanceTotal = document.getElementById('balance-total')
    const preBlanceTotalText = balanceTotal.innerText
    const preBlanceTotalAmount = parseFloat(preBlanceTotalText)
    // set balance Total**
    const newBalanceAfteerWidthdraw = preBlanceTotalAmount - widthdrawAmount
    balanceTotal.innerText = newBalanceAfteerWidthdraw
})