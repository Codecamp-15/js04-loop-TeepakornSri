
console.log('Starting.....');
// () = parenthesis
// {} = bracket
// [] = square bracket 

// EX2:FizzBuzz 
// for (let i = 1; i <= 20; i = i + 1) {
//     if (i % 3 === 0 && i % 5 === 0)  console.log('FizzBuzz')
//     else if (i % 3 === 0)  console.log('Fizz')
//     else if (i % 5 === 0)  console.log('Buzz') 
//     else console.log(i)
//     }



// EX3:FizzBuzz skipBuzz
// for (let i = 1; i <= 20; i = i + 1) {
//     if (i % 3 === 0 && i % 5 === 0)  console.log('FizzBuzz')
//     else if (i % 3 === 0)  console.log('Fizz')
//     else if (i % 5 === 0)  continue; // ใช้ by pass ไปที่ตัว Step 
//     else console.log(i)
//     }


// Ex3B
// for (let i = 1; i <= 20; i++)
//     if(i % 2 == 0) console.log(i);
// else continue;  Update ค่าและrun loop ขั้นถัดไป codeใต้ continue จะไม่ถูฏรันหรืออ่านเลย
//     console.log('even'); 



//EX4 : Concat String
// let  str =""

// for(let i = 1; i <= 10; i++){


// Guard
//     if(i % 3 == 0)
//         continue;
//     str = str + i
//     "" + 1 =>"1"
//     "" + 2 =>"12"
// }

// console.log(str); // "123456"


//EX5 : Remove Vowel (a,e,i,o,u)
let src = "codecamp"
let res = "" //ให้ res มีค่าออกมาโดยไม่มีสระ cdcmp

//src.length ==> 8
//src[0] ==> 0
//src[1] ==> 1

// for(let i = 0; i < src.length; i++){
//     // console.log(i, src[i]);
//     let c = src[i];
//     let isVowel = (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
//     if (isVowel) continue;
//     else res = res + src[i];
    //'' + src[0] == '' + 'c' => 'c'
    //'c' + src[1] == 'c' + 'o' => 'co'
// }

// console.log(res);

// ADVANCE : Nested Loop;
// Mutiplication Table)

for (let i = 2; i <= 3; i++){
    for(let j = 1; j <= 12; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('\n');
}

console.log('Ending.....');

