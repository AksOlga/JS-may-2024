/*-------------------exercise-1----------------------*/


// function square(a, b){
//     return a * b}
// square(15, 30);
// let result = square(15 , 30);
// console.log(result)

/*-------------------exercise-2----------------------*/
//
// function square(r) {
//     let S;
//     S = Math.PI * Math.pow(r, 2);
//     return S;
// }
//
//     let result =square(5)
//     console.log(result);


/*-------------------exercise-3----------------------*/



// function square(r, h){
//     let S;
//     S = 2 * Math.PI * r * h + 2 * Math.PI * Math.pow(r, 2);
//     return S;
// }
// let result = square(5, 6 )
// console.log(result)

/*-------------------exercise-4----------------------*/

//
// function element(arr){
//     for (const element of arr) {
//         console.log(element);
//     }
// }
// let myArr =[3, 4, 5, 6]
// element(myArr)

/*-------------------exercise-5----------------------*/

// function paragraph(text) {
//     document.write('<p>' + text + '</p>')
//     }
//
// paragraph('Lorem ipsum dolor sit amet.')

/*-------------------exercise-6----------------------*/

// function paragraph(text) {
//     document.write(
//         '<ul>' +
//             '<li>' + text + '</li>'+
//             '<li>' + text + '</li>'+
//             '<li>' + text + '</li>'+
//         '</ul>')
// }
// paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, repellat.');



/*-------------------exercise-7----------------------*/



// function paragraph(text,counter) {
//
//         document.write('<ul>')
//         for (let i = 0; i < counter; i++) {
//             document.write(`<li>${text}</li>`);
//         }
//
//         document.write('</ul>');
// }
// paragraph( 'Lorem ipsum', 4)


/*-------------------exercise-8----------------------*/

//
// function foobar (element){
//
//     document.write('<ul>')
//    for (const item of element){
//        document.write(`<li>${item}</li>`)
//    }
//    document.write('</ul>');
// }
//
// foobar([10, 20, true, 'lorem', 40, 50]);


/*-------------------exercise-9----------------------*/

//
// function firm(users) {
//     for (const user of users) {
//         document.write(`<div>${user.name} ${user.id} ${user.age} </div>`);
//
//     }
// }
//
// firm([
//     {id:1, name:'Vova', age:35},
//     {id:2, name:'Vova', age:35},
//     {id:3, name:'Vova', age:35},
//     {id:5, name:'Vova', age:35},
//
// ]);


/*-------------------exercise-10----------------------*/

//
// function minNum(nums) {
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


// function sum(arr){
//     let basket = 0;
//     for (const arrKey of arr) {
//         basket = basket + arrKey;
//     }
//       return basket;
//
//     }
//
//     console.log(sum([4, 5, 20]));
//


/*-------------------exercise-12----------------------*/
//
// function swap(arr, index1, index2) {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//
//     return arr;
// }
// console.log(swap([11, 22, 33, 44], 0, 1));

/*-------------------exercise-13----------------------*/

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            let rate = currencyValues[i].value;
            return sumUAH / rate;
        }
    }
    return `Валюта ${exchangeCurrency} не знайдена.`;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD')); // Виведе 400





