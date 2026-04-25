import User from "./classes/User.js";
import Password from "./utils/Password.js";



const user = await User.create("Yassine", "y@g.com", "P2assword");

console.log(user.password)
console.log(await Password.checkPassword("P2assword", user.password))