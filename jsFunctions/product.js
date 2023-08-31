
function productTotal(productName, quantity, price){
    let productTotal = (price*quantity)
    let tax = productTotal*.085;
    let totalDue = productTotal+tax;
    console.log(productName, quantity, price, productTotal, tax, totalDue);
    document.write(
        `
        <div>
            <p><b>Product Name:</b> ${productName}</p>
            <p>Price: ${price}</p>
            <p>Quantity: ${quantity}</p>
            <p>Subtotal: ${productTotal}</p>
            <p>Sales Tax: ${tax}</p>
            <p>Sales Total: ${totalDue}</p>
        </div>
        `
    )


};


// productTotal("macbook", 5, 200);

function calculateSalesTotal(){
// getting the values
    let productName = prompt("Enter Product Name");
    let price = Number(prompt("Enter Price"));
    let quantity = Number(prompt("Enter Quantity"));

// calculating it
    let productTotal = (price*quantity)
    let tax = productTotal*.085;
    let totalDue = productTotal+tax;

// display and inject the code

document.getElementById("productReceipt").innerHTML+=`
<div>
    <p><b>Product Name:</b> ${productName}</p>
    <p><b>Price:</b> ${price}</p>
    <p><b>Quantity:</b> ${quantity}</p>
    <p><b>Subtotal:</b> ${productTotal}</p>
    <p><b>Sales Tax:</b> ${tax}</p>
    <p><b>Sales Total:</b>${totalDue}</p>
</div>
`
};

// productTotal("macbook", 5, 200);
