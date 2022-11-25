
// const desktopPrice = 1209.99;
// const monitorPrice = 149.99;
// const keyboardPrice = 49.99;


// function manageShopingCartElements(element, productPrice, isItemIncrease){

//     if(isItemIncrease){
//         let countItem = parseInt(document.getElementById("quantity-"+element).innerHTML), itemQuantity ;
//         itemQuantity = countItem !== 0 ? countItem-1 : 0;
//         document.getElementById("quantity-"+element).innerText = itemQuantity;
//         document.getElementById("cost-"+element).innerText = productPrice*itemQuantity;

//         document.getElementById("cost-total").innerText = itemTotalPrice("PC", "monitor", "keyboard");

//     } else{
//         let countItem = parseInt(document.getElementById("quantity-"+element).innerHTML), itemQuantity ;
//         itemQuantity = countItem >= 0 ? countItem+1 : 0;
//         document.getElementById("quantity-"+element).innerText = itemQuantity;
//         document.getElementById("cost-"+element).innerText = productPrice*itemQuantity;

//         document.getElementById("cost-total").innerText = itemTotalPrice("PC", "monitor", "keyboard");
//     }

// };

// //Summary area Calculation---

// function itemTotalPrice(element1,element2, element3){
//     const itemPrice1 = parseFloat(document.getElementById("cost-"+element1).innerText);
//     const itemPrice2 = parseFloat(document.getElementById("cost-"+element2).innerText);
//     const itemPrice3 = parseFloat(document.getElementById("cost-"+element3).innerText);
//     return itemPrice1+itemPrice2+itemPrice3;
// };



// //Calling Desktop section
// document.getElementById("mimusSign-PC").addEventListener("click", function(){
//     manageShopingCartElements("PC", desktopPrice, true);
// });

// document.getElementById("plusSign-PC").addEventListener("click", function(){
//     manageShopingCartElements("PC", desktopPrice, false);
// });

// //Calling Keyboard section
// document.getElementById("mimusSign-keyboard").addEventListener("click", function(){
//     manageShopingCartElements("keyboard", keyboardPrice, true);
// });

// document.getElementById("plusSign-keyboard").addEventListener("click", function(){
//     manageShopingCartElements("keyboard", keyboardPrice, false);
// });

// //Calling monitor section
// document.getElementById("mimusSign-monitor").addEventListener("click", function(){
//     manageShopingCartElements("monitor", monitorPrice, true);
// });

// document.getElementById("plusSign-monitor").addEventListener("click", function(){
//     manageShopingCartElements("monitor", monitorPrice, false);
// });

//Desktop Section
document.getElementById("plusSign-PC").addEventListener("click", function(){

    manageItemQuantity(true,"PC", 1209.99);
});

document.getElementById("mimusSign-PC").addEventListener("click", function(){
    manageItemQuantity(false, "PC", 1209.99);
});

//Monitor section
document.getElementById("plusSign-monitor").addEventListener("click", function(){

    manageItemQuantity(true,"monitor", 149.99);
});

document.getElementById("mimusSign-monitor").addEventListener("click", function(){
    manageItemQuantity(false, "monitor", 149.99);
});

//Keyboard section
document.getElementById("plusSign-keyboard").addEventListener("click", function(){

    manageItemQuantity(true,"keyboard", 49.99);
});

document.getElementById("mimusSign-keyboard").addEventListener("click", function(){
    manageItemQuantity(false, "keyboard", 49.99);
});



function manageItemQuantity(isTrue, item, itemPrice){

    if(isTrue){
    let quantityPC = parseInt(document.getElementById("quantity-"+item).innerText);
    let pcQuan;
    pcQuan = quantityPC >= 0 ? quantityPC+1 : 0;
    document.getElementById("quantity-"+item).innerText = pcQuan;

    //Item Price
    let costPC = parseFloat(document.getElementById("cost-"+item).innerText);
    pcPrice = (pcQuan*itemPrice).toFixed(2);
    document.getElementById("cost-"+item).innerText = pcPrice;

    //Total section
    let price1 = parseFloat(document.getElementById("cost-PC").innerText);
    let price2 = parseFloat(document.getElementById("cost-monitor").innerText);
    let price3 = parseFloat(document.getElementById("cost-keyboard").innerText);

    document.getElementById("cost-total").innerText = (price1+price2+price3).toFixed(2);

    document.getElementById("tax-id").innerHTML = ((price1+price2+price3)*5/100).toFixed(2);

    document.getElementById("grandTotal-id").innerText = ((price1+price2+price3) + ((price1+price2+price3)*5/100)).toFixed(2);

    } 
    
    else{
        let quantityPC = parseInt(document.getElementById("quantity-"+item).innerText);
    let pcQuan;
    pcQuan = quantityPC > 0 ? quantityPC-1 : 0;
    document.getElementById("quantity-"+item).innerText = pcQuan;

    //Item Price
    let costPC = parseFloat(document.getElementById("cost-"+item).innerText);
    pcPrice = (pcQuan*itemPrice).toFixed(2);
    document.getElementById("cost-"+item).innerText = pcPrice;

    //Total section
    let price1 = parseFloat(document.getElementById("cost-PC").innerText);
    let price2 = parseFloat(document.getElementById("cost-monitor").innerText);
    let price3 = parseFloat(document.getElementById("cost-keyboard").innerText);

    document.getElementById("cost-total").innerText = (price1+price2+price3).toFixed(2);
    document.getElementById("tax-id").innerHTML = ((price1+price2+price3)*5/100).toFixed(2);
    document.getElementById("grandTotal-id").innerText = ((price1+price2+price3) + ((price1+price2+price3)*5/100)).toFixed(2);
    }
}





