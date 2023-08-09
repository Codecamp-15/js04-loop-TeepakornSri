// PROGRAM-1 : User-1

// let ansNumber = prompt('Enter your number'); // => null,string :'','     ','qweqwq','12'

// let isNull = ansNumber === null;
// let isEmpty = ansNumber.trim() === ''
// let isNan = isNaN(ansNumber)

// let isValid = ansNumber == null || ansNumber.trim() === '' || isNaN(ansNumber);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;




// if (isValid) {
//     alert('Invaild number');
// } else if (outOfRange) {
//     alert('Invalid Range');
// } else if (isInRange) {
//     alert('Try again');  Program : player 2
// }

/// V.2 : รับ Input ได้เรื่อยๆจนกว่าจะพิมพ์ถูก / แต่ให้กด ESC เพื่อจบโปรแกรมได้

let ansNumber = '';
let isEmptry;
let isNan;
let outOfRange

do {
    ansNumber = prompt('Enter your number') || ''; //null || ""

    isEmptry = ansNumber.trim() === ''
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
    if(isEmptry || isNan){
        alert('Invalid input. Try 1-99')
    } else if(outOfRange){
        alert('Invalid Range. Try 1-99')
    }

} while (isEmptry || isNan);


// Program 2 : Guess
// ทายซ้ำ
//- Hint Invalid Range
// - Hint Too High, Too Low

let guessNumber;

do{
    guessNumber = prompt('Enter your number') || ''; //null || ""

    isEmptry = guessNumber.trim() === ''
    isNan = isNaN(guessNumber);
    outOfRange = Number(guessNumber) < 1 || Number(guessNumber) > 99;
    if(isEmptry || isNan){
        alert('Invalid input. Try 1-99')
    } else if(outOfRange){
        alert('Invalid Range. Try 1-99')
    } else if(+guessNumber > +ansNumber){
        alert('Too High')
    } else if(+guessNumber < +ansNumber){
        alert('Too Low')
    } else if(+guessNumber === +ansNumber){
        alert('Correct')
    }
} while(+guessNumber != +ansNumber)
