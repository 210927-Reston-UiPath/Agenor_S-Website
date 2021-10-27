function buy(name){
    debugger;

    let cart = document.querySelector('#cart tbody');
    let newItem = cart.insertRow();

    let itemName = newItem.insertCell(0);
    itemName.innerHTML = name;

    let elementId = '#'+ name.replace(' ','');

    let itemQuantity = newItem.insertCell(1);
    itemQuantity.innerHTML = document.querySelector(elementId + ' td .quantity').value;

    let itemPrice = newItem.insertCell(2);
    itemPrice.innerHTML = document.querySelector(elementId + ' .price').innerHTML;   


    let itemTotal = newItem.insertCell(3);
    let a = itemPrice.innerHTML = document.querySelector(elementId + ' .price').innerHTML;
    let b = itemQuantity.innerHTML = document.querySelector(elementId + ' td .quantity').value;
    a = Number(a.replace(/[^0-9.-]+/g,""));
    b = Number(b.replace(/[^0-9.-]+/g,""));
    let total = a * b;
    let subTotal = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    itemTotal.innerHTML = subTotal.concat(".00");

    let table = document.getElementById("cart");
    sumVal = 0;
    for (let i = 1; i < table.rows.length; i++) {
             
        sumVal = sumVal + parseFloat(table.rows[i].cells[3].innerHTML);
    }

    document.getElementById("val").innerHTML = "SubTotal = $" + sumVal+".00";

    document.querySelector(elementId + ' td .quantity').value = '';
}

function checkout(){
    document.querySelectorAll('#cart tbody tr').forEach(row=> row.remove());
    
}