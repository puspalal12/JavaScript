const cart = [
    { name: "mobile", price: 20000, quantity: 2 },
    { name: "charger", price: 3000, quantity: 2 },
    { name: "earbud", price: 5000, quantity: 5 }
];
function cartInvoice(cartItems){
    let actualPrice = 0;
    let discountPrice =0;
    for (let item of cartItems){
        actualPrice+=item.price*item.quantity;
    }
    if(actualPrice>40000){
        discountPrice = (10/100) * actualPrice;
    }

    let totalPrice = actualPrice - discountPrice;

    console.log("Actual Price : RS."+actualPrice)
    console.log("Discount @ 10% : RS."+discountPrice)
    console.log("Grand Total : RS."+totalPrice)
    return totalPrice;
}
const invoice = cartInvoice(cart);
