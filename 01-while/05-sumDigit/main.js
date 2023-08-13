let n = +prompt('Enter number');

let count = 0;

if ( n < 0 ) n = -n;


// PATTERN RECOGNITION

// 0
// 1152 => (1150 + 2) =>(115 * 10) + 2
// (1152 - 2) / 10 => n' = 115
// (115 - 5) / 10  => n'= 11
//  (11 - 1) / 10 => n' = 1
// (7-7) / 10 => n' = 0


let sum = 0;
while (n >= 1) {
    let remainder = n % 10;
    n = ( n - remainder) / 10;
    sum += remainder;
    count++
}

console.log(count,sum);