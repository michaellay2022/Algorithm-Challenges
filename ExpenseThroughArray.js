//Array
// Rules about working with array data structure

//1, We can store whatever we want to inside of an Array, numbers, strings, booleans, even more arrays
//2, The values are all stores in addresses that we access with a number (indexes) starting at 0.
//3, We can get the number of values stored in the array by checking it's .length property
//4, We can add a new value to the end of the array using a "method" called .push()
//5, We can remove a value from the end of the array using a method called .pop()

var purchaseWeekFeb15 = [
    12.88,
    44.50,
    34.29,
    5.83,
    10.00,
    //..more purchase
]
console.log("the first purchase cost: $" + purchaseWeekFeb15[0]);

var numberofPurchases = purchaseWeekFeb15.length
var lastPurchaseValue = purchaseWeekFeb15[numberofPurchases - 1];
console.log("the last purchase cost:$" + lastPurchaseValue);

var total = 0;
for (var i = 0; i < purchaseWeekFeb15.length; i++){
    total += purchaseWeekFeb15[i];
}
console.log("the total spent was:$" + total);