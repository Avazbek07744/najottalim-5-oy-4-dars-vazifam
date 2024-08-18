//! 1-misol \\\

// let str = "Salom Ishlar Qalay";

// function count(str) {
//     let countU = 0;
//     let countL = 0;

//     for (let i of str) {
//         if (i >= 'A' && i <= 'Z') {
//             countU++;
//         } else if (i >= 'a' && i <= 'z') {
//             countL++;
//         }
//     }

//     return { upperCase: countU, lowerCase: countL };
// }

// let result = count(str);
// console.log(result);

//! 2-misol \\\

// let str = 'salom ishlar qalay palindrom qalaysan palindrom'

// function ajratuvchiStrni(arg) {
//     let res1 = arg.split(' ')
//     let res2 = []

//     for (const i of res1) {
//         if (i == 'palindrom') {
//             res2++
//         }
//     }
//     return res2
// }
// console.log(ajratuvchiStrni(str));

//! 3-misol \\\

// function takroriyNum(numbers) {
//     let counts = {};
//     let res = [];

//     for (let i of numbers) {
//         counts[i] = (counts[i] || 0) + 1;
//     }

//     for (let e in counts) {
//         if (counts[e] > 1) {
//             res.push(Number(e));
//         }
//     }

//     return res;
// }

// let arr = [1, 2, 3, 4, 2, 5, 3, 6, 1, 1];
// let result = takroriyNum(arr);
// console.log(result);

//! 4-misol \\\

// function textToBinary(text) {
//     let binaryArr = [];

//     for (let i of text) {
//         let asciiV = i.charCodeAt(0);

//         let binaryV = asciiV.toString(2);

//         binaryV = binaryV.padStart(8, '0');

//         binaryArr.push(binaryV);
//     }

//     return binaryArr.join(' ');
// }

// let str = "Hello!";
// let result = textToBinary(str);
// console.log(result);

//! 5-misol \\\

// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// let n = 7;
// let result = fibonacci(n);
// console.log(result);

//! 6-misol \\\

// let num = 123

// function number(arg) {
//     let res1 = String(arg)
//     let res = 0
//     for (const i of res1) {
//         res += Number(i)
//     }
//     return res
// }
// console.log(number(num));

//! 7-misol \\\

// function morseToText(arg) {
//     const obj = {
//         ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F",
//         "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
//         "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R",
//         "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
//         "-.--": "Y", "--..": "Z", "-----": "0", ".----": "1", "..---": "2",
//         "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7",
//         "---..": "8", "----.": "9", "|": " "
//     };

//     return arg.split(' ').map(code => obj[code] || '').join('');
// }

// let str = "... --- ... | .--. .-.. . .- ... . .... . .-.. .--. -- .";
// let result = morseToText(str);
// console.log(result);

//! 8-misol \\\

// let str = 'salom bolalar'

// function teskariStr(arg) {
//     return arg.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }
// console.log(teskariStr(str));

//! 9-misol \\\
//! 10-misol \\\