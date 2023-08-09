console.log('learn while loop ')

//ประเภทของ Loop 
// - Condition Loop ตัดสินใจว่าจะรันต่อไหม ****จาก Boolean***** !!!มีโอกาสฟังงง่ายสุด
// - Contion Loop ตัดสินใจว่าจะรันต่อไหม จาก ตัวเลข
// - List Loop ตัดสินใจว่าจะรันต่อไหม จาก จำนวนของรายการ

console.log("Starting...")

let i = 1;

while (i <= 20 ) {
    //loop block
    // if (i % 3 == 0){
    //     console.log(i);
    // } else if (i % 5 == 0) {
    //     console.log(`${i}High Five`);
    // }
    // if (i % 5 == 0){
    //     console.log(`${i}High Five`);
    // } else if (i % 3 == 0) {
    //     console.log(i);
    // }
    // if ( i % 3 != 0 ) {
    //     console.log(i)
    // }

    // if ( i % 3 === 0 && i % 5 == 0){
    //     console.log(`${i}FizzBuzz`);
    // } else if ( i % 3 === 0 ){
    //     console.log(`${i}Fizz`);
    // } else if ( i % 5 === 0 ){
    //     console.log(`${i}Buzz`);
    // } else {
    //     console.log(i);
    // }

    // แบบย่อ
    i  % 3=== 0 && i % 5 === 0 ? console.log ('FizzBuzz')
        : i % 3 === 0 ? console.log ('Fizz')
        : i % 5 === 0 ? console.log ('Buzz')
        : console.log(i);

    i++;
}


 // โจทย์ลองทำ
//FizzBuzz เป็นการlog ค่า string ออกมา
//Range : 1-20 
//divided by 3 : PRINT Fizz
//divided by 5 : PRINT Fizz
//divided by 3 and 5 : PRINT FizzBuzz


console.log("end....")