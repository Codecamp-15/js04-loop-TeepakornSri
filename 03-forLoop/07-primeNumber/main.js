//ให้เขียนโค้ดเพื่อหาจำนวนเฉพาะตั้งแต่ 1 ถึง 100 
// - Program : จำนวนที่กำหนดให้เป็นจำนวนเฉพาะหรือเปล่า ?



for (let n = 2; n <= 100; n++) {
    
    let isPrime = true; //flag
    //only 1 Number
    for (let divider = 2; divider < n; divider++) {
        if (n % divider == 0){
        isPrime = false;
        break; //ใช้กับเลขที่เยอะๆ
    }
}
    if (isPrime) console.log(`Number ${n} is prime number`);
}