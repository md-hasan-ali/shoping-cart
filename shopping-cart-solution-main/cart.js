function updateInput(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // sub total
    calculateTotal()
}
function getInputValue(product) {
    const inputNumber = document.getElementById(product + '-number');
    const productNumber = inputNumber.value;
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 20;
    const totalPrice = subTotal + tax;

    // update total price 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// Handle phone increase and decrease
document.getElementById('phone-plus').addEventListener('click', function () {
    updateInput('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateInput('phone', 1219, false)
})
// Handle Case increase and decrease..
document.getElementById('case-plus').addEventListener('click', function () {
    updateInput('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateInput('case', 59, false);
});