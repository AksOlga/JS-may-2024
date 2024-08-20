
/*-------------------exercise-1----------------------*/

// const square = (a, b) => a * b;
// console.log(square(15, 30));

/*-------------------exercise-2----------------------*/
// const square = (r) => Math.PI * Math.pow(r, 2);
// console.log(square(5));

/*-------------------exercise-3----------------------*/

// const square = (r, h) => 2 * Math.PI * r * h + 2 * Math.PI * Math.pow(r, 2);
// console.log(square(5,6))

/*-------------------exercise-4----------------------*/

// //
// const element=(arr) => {
//     for (const el of arr) {
//         console.log(el);
//     }
// };
// let myArr =[3, 4, 5, 6]
// element(myArr);

/*-------------------exercise-5----------------------*/

// const paragraph = (text) => '<p>' + text + '</p>';
// document.write(paragraph('Lorem ipsum dolor sit amet.'));

/*-------------------exercise-6----------------------*/

// const paragraph = (text) =>
//         '<ul>' +
//         '<li>' + text + '</li>'+
//         '<li>' + text + '</li>'+
//         '<li>' + text + '</li>'+
//         '</ul>';
// document.write(paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, repellat.'))


/*-------------------exercise-7----------------------*/

//
// const paragraph = (text, counter) => {
//     let result = '<ul>';
//     for (let i = 0; i < counter; i++) {
//         result += `<li>${text}</li>`;
//     }
//     result += '</ul>';
//     return result;
// };
//
// document.write(paragraph('Lorem ipsum', 4));


/*-------------------exercise-8----------------------*/


// const foobar = (element) => {
//
//     let result = '<ul>';
//     for (const item of element) {
//         result += `<li>${item}</li>`;
//     }
//     result += '</ul>';
//     return result
// };
//     document.write(foobar([10, 20, true, 'lorem', 40, 50]))


/*-------------------exercise-9----------------------*/

// const firm = (users) => {
//     let result=''
//     for (const user of users) {
//          result +=`<div>${user.name} ${user.id} ${user.age} </div>`;
//
//     }
//     return result
// }
// document.write(firm([
//     {id:1, name:'Vova', age:35},
//     {id:2, name:'Vova', age:35},
//     {id:3, name:'Vova', age:35},
//     {id:5, name:'Vova', age:35},
//
// ]))

/*-------------------exercise-10----------------------*/


// const minNum = (nums) =>{
//     let min = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         let num = nums[i];
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
//
// console.log(minNum([7, -3, 20, 60]));

/*-------------------exercise-11----------------------*/

//
// const sum=(arr)=>{
//     let basket = 0;
//     for (const arrKey of arr) {
//         basket = basket + arrKey;
//     }
//       return basket;
//
//     }
//
//     console.log(sum([4, 5, 20]));


/*-------------------exercise-12----------------------*/

const swap=(arr, index1, index2) =>{
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1));


/*-------------------exercise-13----------------------*/
//
// const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             let rate = currencyValues[i].value;
//             return sumUAH / rate;
//         }
//     }
//     return `Валюта ${exchangeCurrency} не знайдена.`;
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD')); // Виведе 400





