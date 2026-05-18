const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
        ]
};


//copying the  order object
let copyOreder=structuredClone(order)

//changing the values in the copied object
copyOreder.customer.address.city="Mumbai"
copyOreder.items[0].price=85250

//displaying the differences
console.log(order)//original values remained unchanged
console.log(copyOreder)//copied values has been changed