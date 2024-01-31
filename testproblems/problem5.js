const inventory = require("../inventorycardetails/infocarinventory");
const problem4 = require("../Problems/problem4");
const problem5 = require("../Problems/problem5");

const carYear = problem4(inventory);
const oldcar = problem5(inventory,carYear);
const oldcarlength = oldcar.length;
console.log(oldcar);
console.log(oldcarlength);