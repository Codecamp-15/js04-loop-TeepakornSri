let n = +prompt('Enter number');



// PATERN RECOGNITTION

//1150 /10 => 115 => count 1;
//115 / 10 => 11.5 => count 2;
//11.5/10 => 1.15 => count 3;
// 1.15/ => 0.115 => count 4;

let count = 0;

if ( n < 0 ) n = -n;  // วิธีทำให้นับตัวเลขติดลบด้วย


while(n >= 1 ) {
    console.log(n);
    n = n / 10;
    count++;
}

console.log(count)
