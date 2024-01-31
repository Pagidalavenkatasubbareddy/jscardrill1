const inventory = require("../inventorycardetails/infocarinventory");
const problem6 = require("../Problems/problem6");

const totalBMWAndAudicars = problem6(inventory);
console.log(JSON.stringify(totalBMWAndAudicars));