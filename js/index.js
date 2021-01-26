const addBtn1 = document.getElementById("addBtn1");
addBtn1.addEventListener("click", function () {
  updateQuantity("phoneInput", -1);
  phonePriceUpdate("phonePrice", "phoneInput");
  subtotalAddition();
  tax();
  allTotal();
});

const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function () {
  updateQuantity("phoneInput", 1);
  phonePriceUpdate("phonePrice", "phoneInput");
  subtotalAddition();
  tax();
  allTotal();
});

function updateQuantity(id, n) {
  const phoneInput1 = document.getElementById(id).value;
  const convertInt1 = parseFloat(phoneInput1);
  const total1 = convertInt1 - n;
  const result1 = (document.getElementById(id).value = total1);
  return result1;
}

function phonePriceUpdate(id, n) {
  const phonePrice = document.getElementById(id).innerText;
  const PhonePriceConvert = parseFloat(phonePrice);
  const phoneInput = document.getElementById(n).value;
  const phoneInputConvert = parseFloat(phoneInput);
  const totalPrice = 1219 * phoneInputConvert;
  document.getElementById(id).innerText = totalPrice;
}
function secondPhonePriceUpdate(id, n) {
  const phonePrice = document.getElementById(id).innerText;
  const PhonePriceConvert = parseFloat(phonePrice);
  const phoneInput = document.getElementById(n).value;
  const phoneInputConvert = parseFloat(phoneInput);
  const totalPrice = 59 * phoneInputConvert;
  document.getElementById(id).innerText = totalPrice;
}

// second part Event handler

const secondEvent = document.getElementById("secondAddBtn");
secondEvent.addEventListener("click", function () {
  updateQuantity("secondInput", -1);
  secondPhonePriceUpdate("phoneCasePrice", "secondInput");
  subtotalAddition();
  tax();
  allTotal();
});
const secondEvents = document.getElementById("secondMinusBtn");
secondEvents.addEventListener("click", function () {
  updateQuantity("secondInput", 1);
  secondPhonePriceUpdate("phoneCasePrice", "secondInput");
  subtotalAddition();
  tax();
  allTotal();
});

function subtotalAddition() {
  const subTotal = document.getElementById("subTotal").innerText;
  const subTotalConvert = parseFloat(subTotal);

  const firstPhone = document.getElementById("phonePrice").innerText;
  const firstPhoneConvert = parseFloat(firstPhone);
  const secondPhone = document.getElementById("phoneCasePrice").innerText;
  const secondPhoneConvert = parseFloat(secondPhone);
  const totalSubTotal = firstPhoneConvert + secondPhoneConvert;
  document.getElementById("subTotal").innerText = totalSubTotal;
}

function tax() {
  const tax = document.getElementById("tax").innerText;
  const taxConvert = parseFloat(tax);
  const subtotalAmount = document.getElementById("subTotal").innerText;
  const subtotalAmountConvert = parseFloat(subtotalAmount);
  const totalTax = subtotalAmountConvert % 80;
  document.getElementById("tax").innerText = totalTax;
}

function allTotal() {
  const allTotal = document.getElementById("allTotal").innerText;
  const allTotalConvert = parseFloat(allTotal);
  const tax = document.getElementById("tax").innerText;
  const taxConvert = parseFloat(tax);
  const subtotalAmount = document.getElementById("subTotal").innerText;
  const subtotalAmountConvert = parseFloat(subtotalAmount);

  const totalSum = subtotalAmountConvert + taxConvert;
  document.getElementById("allTotal").innerText = totalSum;
}
