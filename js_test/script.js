//=========WARMUP EX==================
// const warmup = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Program complete")
//     }, 3000);
// });

// warmup.then((resolvedValue) => {
//     console.log(resolvedValue)
// });

// console.log("Program started")
// console.log(warmup)
// console.log("Program in progress...")

//==================ANSWER=====================

// console.log("Program started")

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 3000)
// });
 
// console.log(myPromise)
// console.log("Program in progress...")

// myPromise.then(() => {
//     console.log("Program complete")
// });

//===========EX 1====================

// console.log("Program Started")

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//         setTimeout(() => {
//             reject()
//             console.log("Program failure")
//         }, 2000);
//         console.log("Program success")
//     }, 3000);
// });

// console.log(myPromise)
// console.log("Program is pending...")

//=============Ans================
console.log("Program Started")

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000)

    setTimeout(() => {
        reject()
    }, 2000)
})

myPromise.then(() => {
    console.log("Program Complete")
}).catch(() => {
    console.log("Program failure")
})

console.log(myPromise)
console.log("Program in progress...")