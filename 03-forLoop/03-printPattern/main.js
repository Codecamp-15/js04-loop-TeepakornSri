
// star = '*'
// x = '*'
// for (let i = 0; i < 4; i++){
// x += '*'
//  star=`${star}\n${x}`

// }
// console.log(star)

// for (let i = 1; i <= 4; i++) {
//     let str =''
//     for (let j = 1; j <= i; j++){
//         str += '*'
//     }
//     console.log(str);
// }

let str =''
for (let i = 1; i <= 4; i++){
    for(let j = 1; j <= 4; j++){
        if (j <= i) str +='*';
    }
    str +='\n';
}

console.log(str);