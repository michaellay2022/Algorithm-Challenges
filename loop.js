//1, Print odds 1-20
for (var i = 1; i < 21; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//2, Decreasing Multiples of 3
// Write code that will print all of the values that are evenly divisible by 3 from 100 down to 0
for (var i = 100; i > 0; i--){
    if(i % 3 == 0) {
        console.log(i)
    }
}

//3, Print the sequence
//Write code that will print the values in sequence 4, 2.5, 1, -0.5, -2, -3.//Minute the each number by 1.5
for (var i = 4; i >= -3.5; i -= 1.5){
    console.log(i)
}

//4, Sigma
//Write code that will add all the values from 1 - 100 onto some variable sum and at the end console.log the result 1+2+3.....+98+99+100. We should get back 5050 at the end.

var sum = 0;
for (var i = 1; i <= 100; i++){
    console.log(i)
    sum = sum + i
}
console.log(sum);

//5, Factorial
//Write code that multiply all the values from 1-12 onto some variable product and at the end console.log the result 1*2*3...*10*11*12. We should get back 479001600 at the end.
var mult = 1;
for (var i = 1; i <= 12; i++){n 
    console.log(i)
    mult=mult*i
}
console.log(mult);
