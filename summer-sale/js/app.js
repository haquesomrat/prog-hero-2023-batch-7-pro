// get product name
function getElementTitleById(elemntId) {
  const parentEle = document.getElementById(elemntId).children[1];
  const cardTitle = parentEle.children[1].innerText;
  return cardTitle;
}
// get product price
function getElementPriceById(elemntId) {
  const parentEle = document.getElementById(elemntId).children[1];
  const price = parentEle.children[2].children[0].innerText;
  return price;
}
// appear product name on cart
function displayProductNameOnCart(fieldId, cardTitle) {
  const displayProduct = document.getElementById(fieldId);
  const count = displayProduct.childElementCount;
  const p = document.createElement("p");
  const item = p.classList;
  item.add("text-xl");
  item.add("font-semibold");
  item.add("py-1");
  p.innerText = `${count + 1}. ${cardTitle}`;
  displayProduct.appendChild(p);
  return displayProduct;
}
// calculate sum of total price
function calculateSumOfProduct(elemntId, price) {
  const totalPriceDisplay = document.getElementById(elemntId);
  const totalPriceString = totalPriceDisplay.innerText;
  const totalPrice = parseFloat(totalPriceString);
  const sumOfPrice = (price + totalPrice).toFixed();
  return sumOfPrice;
}
// calculate total price
function getTotalPriceValueById(totalId) {
  const totalPrice = document.getElementById(totalId);
  const totalPriceValueString = totalPrice.innerText;
  const totalPriceValue = parseFloat(totalPriceValueString);
  return totalPriceValue;
}
// calculate discount price
function calculateDiscount(totalPrice, elementId) {
  const discountPrice = (totalPrice * 0.2).toFixed(2);
  const discountFIeld = document.getElementById(elementId);
  discountFIeld.innerText = discountPrice;
  return discountPrice;
}
// calculate final price
function calculateFinalPrice(elementId, totalPrice, discountPrice) {
  const finalPriceField = document.getElementById(elementId);
  const currentFinalPrice = (totalPrice - discountPrice).toFixed(2);
  finalPriceField.innerText = currentFinalPrice;
}

// card 1
document.getElementById("card-1").addEventListener("click", () => {
  const cardTitle = getElementTitleById("card-1");
  const priceString = getElementPriceById("card-1");
  let price = parseFloat(priceString);
  displayProductNameOnCart("show-product", cardTitle);
  const totalPriceDisplay = document.getElementById("total-price");
  const sumOfPriceString = calculateSumOfProduct("total-price", price);
  let sumOfPrice = parseFloat(sumOfPriceString);
  totalPriceDisplay.innerText = sumOfPrice;
  if (sumOfPrice >= 200) {
    const coupon = document.getElementById("coupon-btn");
    coupon.removeAttribute("disabled");
    const purchase = document.getElementById("btn-purchase");
    purchase.removeAttribute("disabled");
  }
  document.getElementById("coupon-btn").addEventListener("click", () => {
    const couponField = document.getElementById("coupon-field");
    const sumOfPrice = getTotalPriceValueById("total-price");
    console.log(sumOfPrice);
    const typedCouponCode = couponField.value;
    if (typedCouponCode === "SELL200") {
      let discountPrice = calculateDiscount(sumOfPrice, "discount-price");
      alculateFinalPrice("final-price", sumOfPrice, discountPrice);
    }
    couponField.value = "";
  });
});

// card 2
document.getElementById("card-2").addEventListener("click", () => {
  const cardTitle = getElementTitleById("card-2");
  const priceString = getElementPriceById("card-2");
  let price = parseFloat(priceString);
  displayProductNameOnCart("show-product", cardTitle);
  const totalPriceDisplay = document.getElementById("total-price");
  const sumOfPriceString = calculateSumOfProduct("total-price", price);
  let sumOfPrice = parseFloat(sumOfPriceString);
  totalPriceDisplay.innerText = sumOfPrice;
  if (sumOfPrice >= 200) {
    const coupon = document.getElementById("coupon-btn");
    coupon.removeAttribute("disabled");
    const purchase = document.getElementById("btn-purchase");
    purchase.removeAttribute("disabled");
  }
  document.getElementById("coupon-btn").addEventListener("click", () => {
    const couponField = document.getElementById("coupon-field");
    const sumOfPrice = getTotalPriceValueById("total-price");
    const typedCouponCode = couponField.value;
    if (typedCouponCode === "SELL200") {
      let discountPrice = calculateDiscount(sumOfPrice, "discount-price");
      calculateFinalPrice("final-price", sumOfPrice, discountPrice);
    }
    couponField.value = "";
  });
});

// card 3
document.getElementById("card-3").addEventListener("click", () => {
  const cardTitle = getElementTitleById("card-3");
  const priceString = getElementPriceById("card-3");
  let price = parseFloat(priceString);
  displayProductNameOnCart("show-product", cardTitle);
  const totalPriceDisplay = document.getElementById("total-price");
  const sumOfPriceString = calculateSumOfProduct("total-price", price);
  let sumOfPrice = parseFloat(sumOfPriceString);
  totalPriceDisplay.innerText = sumOfPrice;
  if (sumOfPrice >= 200) {
    const coupon = document.getElementById("coupon-btn");
    coupon.removeAttribute("disabled");
  }
  if (sumOfPrice > 0) {
    const purchase = document.getElementById("btn-purchase");
    purchase.removeAttribute("disabled");
  }
  document.getElementById("coupon-btn").addEventListener("click", () => {
    const couponField = document.getElementById("coupon-field");
    const sumOfPrice = getTotalPriceValueById("total-price");
    const typedCouponCode = couponField.value;
    if (typedCouponCode === "SELL200") {
      let discountPrice = calculateDiscount(sumOfPrice, "discount-price");
      calculateFinalPrice("final-price", sumOfPrice, discountPrice);
    }
    couponField.value = "";
  });
});
// card 4
document.getElementById("card-4").addEventListener("click", () => {
  const cardTitle = getElementTitleById("card-4");
  const priceString = getElementPriceById("card-4");
  let price = parseFloat(priceString);
  displayProductNameOnCart("show-product", cardTitle);
  const totalPriceDisplay = document.getElementById("total-price");
  const sumOfPriceString = calculateSumOfProduct("total-price", price);
  let sumOfPrice = parseFloat(sumOfPriceString);
  totalPriceDisplay.innerText = sumOfPrice;
  if (sumOfPrice >= 200) {
    const coupon = document.getElementById("coupon-btn");
    coupon.removeAttribute("disabled");
    const purchase = document.getElementById("btn-purchase");
    purchase.removeAttribute("disabled");
  }
  document.getElementById("coupon-btn").addEventListener("click", () => {
    const couponField = document.getElementById("coupon-field");
    const sumOfPrice = getTotalPriceValueById("total-price");
    const typedCouponCode = couponField.value;
    if (typedCouponCode === "SELL200") {
      let discountPrice = calculateDiscount(sumOfPrice, "discount-price");
      calculateFinalPrice("final-price", sumOfPrice, discountPrice);
    }
    couponField.value = "";
  });
});
// card 5
document.getElementById("card-5").addEventListener("click", () => {
  const cardTitle = getElementTitleById("card-5");
  const priceString = getElementPriceById("card-5");
  let price = parseFloat(priceString);
  displayProductNameOnCart("show-product", cardTitle);
  const totalPriceDisplay = document.getElementById("total-price");
  const sumOfPriceString = calculateSumOfProduct("total-price", price);
  let sumOfPrice = parseFloat(sumOfPriceString);
  totalPriceDisplay.innerText = sumOfPrice;
  if (sumOfPrice >= 200) {
    const coupon = document.getElementById("coupon-btn");
    coupon.removeAttribute("disabled");
    const purchase = document.getElementById("btn-purchase");
    purchase.removeAttribute("disabled");
  }
  document.getElementById("coupon-btn").addEventListener("click", () => {
    const couponField = document.getElementById("coupon-field");
    const sumOfPrice = getTotalPriceValueById("total-price");
    const typedCouponCode = couponField.value;
    if (typedCouponCode === "SELL200") {
      let discountPrice = calculateDiscount(sumOfPrice, "discount-price");
      calculateFinalPrice("final-price", sumOfPrice, discountPrice);
    }
    couponField.value = "";
  });
});
// card 6
document.getElementById("card-6").addEventListener("click", () => {
  const cardTitle = getElementTitleById("card-6");
  const priceString = getElementPriceById("card-6");
  let price = parseFloat(priceString);
  displayProductNameOnCart("show-product", cardTitle);
  const totalPriceDisplay = document.getElementById("total-price");
  const sumOfPriceString = calculateSumOfProduct("total-price", price);
  let sumOfPrice = parseFloat(sumOfPriceString);
  totalPriceDisplay.innerText = sumOfPrice;
  if (sumOfPrice >= 200) {
    const coupon = document.getElementById("coupon-btn");
    coupon.removeAttribute("disabled");
    const purchase = document.getElementById("btn-purchase");
    purchase.removeAttribute("disabled");
  }
  document.getElementById("coupon-btn").addEventListener("click", () => {
    const couponField = document.getElementById("coupon-field");
    const sumOfPrice = getTotalPriceValueById("total-price");
    const typedCouponCode = couponField.value;
    if (typedCouponCode === "SELL200") {
      let discountPrice = calculateDiscount(sumOfPrice, "discount-price");
      calculateFinalPrice("final-price", sumOfPrice, discountPrice);
    }
    couponField.value = "";
  });
});
// card 7
document.getElementById("card-7").addEventListener("click", () => {
  const cardTitle = getElementTitleById("card-7");
  const priceString = getElementPriceById("card-7");
  let price = parseFloat(priceString);
  displayProductNameOnCart("show-product", cardTitle);
  const totalPriceDisplay = document.getElementById("total-price");
  const sumOfPriceString = calculateSumOfProduct("total-price", price);
  let sumOfPrice = parseFloat(sumOfPriceString);
  totalPriceDisplay.innerText = sumOfPrice;
  if (sumOfPrice >= 200) {
    const coupon = document.getElementById("coupon-btn");
    coupon.removeAttribute("disabled");
    const purchase = document.getElementById("btn-purchase");
    purchase.removeAttribute("disabled");
  }
  document.getElementById("coupon-btn").addEventListener("click", () => {
    const couponField = document.getElementById("coupon-field");
    const sumOfPrice = getTotalPriceValueById("total-price");
    const typedCouponCode = couponField.value;
    if (typedCouponCode === "SELL200") {
      let discountPrice = calculateDiscount(sumOfPrice, "discount-price");
      calculateFinalPrice("final-price", sumOfPrice, discountPrice);
    }
    couponField.value = "";
  });
});
// card 8
document.getElementById("card-8").addEventListener("click", () => {
  const cardTitle = getElementTitleById("card-8");
  const priceString = getElementPriceById("card-8");
  let price = parseFloat(priceString);
  displayProductNameOnCart("show-product", cardTitle);
  const totalPriceDisplay = document.getElementById("total-price");
  const sumOfPriceString = calculateSumOfProduct("total-price", price);
  let sumOfPrice = parseFloat(sumOfPriceString);
  totalPriceDisplay.innerText = sumOfPrice;
  if (sumOfPrice >= 200) {
    const coupon = document.getElementById("coupon-btn");
    coupon.removeAttribute("disabled");
    const purchase = document.getElementById("btn-purchase");
    purchase.removeAttribute("disabled");
  }
  document.getElementById("coupon-btn").addEventListener("click", () => {
    const couponField = document.getElementById("coupon-field");
    const sumOfPrice = getTotalPriceValueById("total-price");
    const typedCouponCode = couponField.value;
    if (typedCouponCode === "SELL200") {
      let discountPrice = calculateDiscount(sumOfPrice, "discount-price");
      calculateFinalPrice("final-price", sumOfPrice, discountPrice);
    }
    couponField.value = "";
  });
});
// card 9
document.getElementById("card-9").addEventListener("click", () => {
  const cardTitle = getElementTitleById("card-9");
  const priceString = getElementPriceById("card-9");
  let price = parseFloat(priceString);
  displayProductNameOnCart("show-product", cardTitle);
  const totalPriceDisplay = document.getElementById("total-price");
  const sumOfPriceString = calculateSumOfProduct("total-price", price);
  let sumOfPrice = parseFloat(sumOfPriceString);
  totalPriceDisplay.innerText = sumOfPrice;
  if (sumOfPrice >= 200) {
    const coupon = document.getElementById("coupon-btn");
    coupon.removeAttribute("disabled");
    const purchase = document.getElementById("btn-purchase");
    purchase.removeAttribute("disabled");
  }
  document.getElementById("coupon-btn").addEventListener("click", () => {
    const couponField = document.getElementById("coupon-field");
    const sumOfPrice = getTotalPriceValueById("total-price");
    const typedCouponCode = couponField.value;
    if (typedCouponCode === "SELL200") {
      let discountPrice = calculateDiscount(sumOfPrice, "discount-price");
      calculateFinalPrice("final-price", sumOfPrice, discountPrice);
    } else {
      alert("Enter a valid Coupon Code");
    }
    couponField.value = "";
  });
});

// reset value
document.getElementById("go-home").addEventListener("click", () => {
  const totalPrice = document.getElementById("total-price");
  const discountPrice = document.getElementById("discount-price");
  const finalPrice = document.getElementById("final-price");
  let productDisplay = document.getElementById("show-product");
  totalPrice.innerText = "0.00";
  discountPrice.innerText = "0.00";
  finalPrice.innerText = "0.00";
  productDisplay.innerText = "";
  const coupon = document.getElementById("coupon-btn");
  coupon.setAttribute("disabled", "");
  const purchase = document.getElementById("btn-purchase");
  purchase.setAttribute("disabled", "");
});
