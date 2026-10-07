const customerName = "Deng";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 15;

function calculateTotal(price, quantity, discount) {
    const subtotal = price * quantity;
    const discountAmount = subtotal * (discount / 100);
    return subtotal - discountAmount;
}

const calculateShipping = (total) => {
    return total >= 500000 ? 0 : 20000;
};

const subtotal = productPrice * quantity;
const discountAmount = subtotal *(discountPercent / 100);
const priceAfterDiscount = calculateTotal(productPrice, quantity, discountPercent);
const shippingCost = calculateShipping(priceAfterDiscount);
const totalPayment = priceAfterDiscount + shippingCost;

console.log(`Customer: ${customerName}`);
console.log(`Product Price: Rp${productPrice}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: Rp${subtotal}`);
console.log(`Discount: Rp${discountAmount}`);
console.log(`After Discount: Rp${priceAfterDiscount}`);
console.log(`Shipping: Rp${shippingCost}`);
console.log(`Total Payment: Rp${totalPayment}`);

