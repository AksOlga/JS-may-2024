/*-------------------exercise-1----------------------*/

//
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



function square(r, h){
    let S;
    S = 2 * Math.PI * r * h + 2 * Math.PI * Math.pow(r, 2);
    return S;
}
let result = square(5, 6 )
console.log(result)

/*-------------------exercise-4----------------------*/


function element(arr){
    for (const element of arr) {
        console.log(element);
    }
}
let myArr =[3, 4, 5, 6]
element(myArr)
/*-------------------exercise-5----------------------*/

function paragraph(arr) {
    let paragraph;
    paragraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, id?'
    return paragraph;
}
document.write(paragraph)

/*-------------------exercise-6----------------------*/

