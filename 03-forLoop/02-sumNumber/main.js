let sum = 0;
let sumEven = 0;
let sumOdd = 0;


for(let i = 1; i <= 100; i++){

    sum += i;

    if(i % 2 == 0) sumEven += i;
    else sumOdd += i;
        
    }

    console.log(sum);
    console.log(sumEven);
    console.log(sumOdd);

// 3: 
let sumEvenSquare = 0;
let sumThirdSquare = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        // console.log(`${i}^2`);
        sumEvenSquare = sumEvenSquare + i ** 2;
    }

    if (i % 3 === 0) {
        sumThirdSquare = sumThirdSquare + i ** 2;
    }
}
    
console.log()
    