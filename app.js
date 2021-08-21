// document.getElementById('8gbMemory').addEventListener('click',()=>{
//     let count = 1;
//     count+=1;
//     if (count>1){
//      document.getElementById('8gbMemory').setAttribute('disabled', true);
//     }

//     const ExtraCost = document.getElementById('memoryCost').innerText="1";

//     /* update price */
// // function updatePrice (elementId, extraCost){}
//     const totalPriceText = document.getElementById('totalPrice').innerText;
//     const PreviousTotalPrice = parseInt(totalPriceText);
//     const newTotalPrice = parseInt(ExtraCost)+PreviousTotalPrice;
//     document.getElementById('totalPrice').innerText=newTotalPrice;

//     /* updateGrand Total price */
//     document.getElementById('grandTotal').innerText=newTotalPrice;


// })


// function addExtraCost (elementId, ExtraCost){
//     document.getElementById('memoryCost').innerText=ExtraCost;
//     const totalPriceText = document.getElementById(totalPrice).innerText;
//     const totalPrice = parseInt(totalPriceText);
//     newTotalPrice = ExtraCost+totalPrice;
// }

// document.getElementById('8gbMemory').addEventListener('click', addExtraCost('memoryCost', '1'))

/* event handlelers for adding extraCost */

document.getElementById('memory').addEventListener('click', function (event) {
    configurePrice('memory-cost');
});
document.getElementById('storage').addEventListener('click', function (event) {
    configurePrice('storage-cost');
});
document.getElementById('delivery').addEventListener('click', function (event) {
    configurePrice('delivery-cost');
});


/* clacutaion for adding extra cost */

function configurePrice(costName) {
    const extraCost = parseInt(event.target.getAttribute('data-cost'));
    if (!isNaN(extraCost)) {
        const totalPrice = parseInt(document.getElementById('total-price').innerText);
        const prevCost = parseInt(document.getElementById(costName).innerText);
        document.getElementById(costName).innerText = extraCost;
        document.getElementById('total-price').innerText = totalPrice - prevCost + extraCost;
        document.getElementById('final-price').innerText = totalPrice - prevCost + extraCost;
    }


}

/* calculate discount by applying promoi code */

function applyPromoCode(){
    const promoCode = document.getElementById('promo-code').value;
    if (promoCode.toLowerCase() == "stevekaku") {
        document.getElementById('error').style.display="none";
        const totalPrice = parseInt(document.getElementById('final-price').innerText);
        document.getElementById('final-price').innerText = totalPrice * ((100 - 20) / 100).toFixed(2);
        document.getElementById('promo-code').value = "" 
    }
    else{
        document.getElementById('error').style.display="block";
    }
}