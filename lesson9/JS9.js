
/*-------------------exercise-1----------------------*/
//#8Nmt60ZT
//- створити блок,
 //   - додати йому класи wrap, collapse, alpha, beta
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//- додати цей блок в body.
//- клонувати його повністю, та додати клон в body.

// const div= document.createElement('div')
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
//
//
// const  cloneNode = div.cloneNode(true);
// document.body.appendChild(div, cloneNode);


/*-------------------exercise-2----------------------*/


//#OLI89c9G
//- Є масив:
 //   ['Main','Products','About us','Contacts']
//Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// const items = ['Main', 'Products', 'About us', 'Contacts'];
//
// const ul = document.createElement('ul');
//
// items.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
// });
// document.body.appendChild(ul);



/*-------------------exercise-4----------------------*/

//#jeBqHV525U5
//- Є масив
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const courses of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div. innerText = `${courses.title} ${courses.monthDuration}`
//     document.body.appendChild(div);
// }

/*-------------------exercise-5----------------------*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const courses of coursesAndDurationArray) {


   const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p')
    div.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');
    h1.innerText = courses.title;
    p.innerText = courses.monthDuration

div.append(h1, p);


    document.body.appendChild(div)

    
}








































