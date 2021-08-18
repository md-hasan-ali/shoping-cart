function updateInput(product,price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productInput.value) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productInput.value) - 1;
    }
    productInput.value = productNumber;

    // product total price 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    getInputValue();
}

function getInputValue() {
    const inputPhone = document.getElementById('phone-number');
    const phoneNumber = parseInt(inputPhone.value);
    const phoneTotal = phoneNumber * 1219;

    const caseInput = document.getElementById('case-number');
    const caseNumber = parseInt(caseInput.value);
    const caseTotal = caseNumber * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    //update total price 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateInput('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateInput('phone', 1219, false);
})
document.getElementById('case-plus').addEventListener('click', function () {
    updateInput('case',59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateInput('case',59, true);
})