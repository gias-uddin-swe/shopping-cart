const addBtn1 = document.getElementById("addBtn1");
addBtn1.addEventListener("click", function () {
  updateQuantity("phoneInput", -1);
  phonePriceUpdate("phonePrice", "phoneInput");
});

const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", function () {
  updateQuantity("phoneInput", 1);
  phonePriceUpdate("phonePrice", "phoneInput");
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




