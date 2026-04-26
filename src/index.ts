import SimpleProduct from "./classes/OOP/Physical/Simple/SimpleProduct.js";
import {WeightUnits} from "./classes/OOP/Shippable.js";


//
// const user = await User.create("Yassine", "y@g.com", "P2assword");
//
// console.log(user.password)
// console.log(await Password.checkPassword("P2assword", user.password)) // true


const product = new SimpleProduct("Phone",
    79.90,
    "just a simple product",
    "pathTo image",
    ["Iphone", "17 Pro Max"],
    90,
    76.90,
    {kind: "weight", unit: WeightUnits.GRAM}
)

console.log(product.calculateShipping());