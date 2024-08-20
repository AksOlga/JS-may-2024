/*-------------------exercise-1----------------------*/

// let word1 = 'hello world';
// console.log(word1.length);
//
// let word2 = 'lorem ipsum';
// console.log(word2.length);
//
// let word3 = 'javascript is cool';
// console.log(word3.length);

/*-------------------exercise-2----------------------*/

// let word1 = 'hello world';
// const word = word1.toUpperCase();
// console.log(word);


// let word2 = 'lorem ipsum';
// const word = word2.toUpperCase();
// console.log(word);

// let word3 = 'javascript is cool';
// const word = word3.toUpperCase();
// console.log(word);

/*-------------------exercise-3----------------------*/



// let word1 =  'HELLO WORLD';
// const word = word1.toLowerCase();
// console.log(word);

//
// let word2 =  'LOREM IPSUM';
// const word = word2.toLowerCase();
// console.log(word);

//
// let word3 = 'JAVASCRIPT IS COOL';
// const word = word3.toLowerCase();
// console.log(word);


/*-------------------exercise-4----------------------*/

// let str =  ' dirty string   ';
// const s=str.trim();
// console.log(s);
// console.log(s.length);
// console.log(str.length);

/*-------------------exercise-5----------------------*/

// function stringToArray(str) {
//     return str.split(' ');
// }
//
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str);
// console.log(arr);

/*-------------------exercise-6----------------------*/

// const arr= [10,8,-7,55,987,-1011,0,1050,0];
// const strings = arr.map(arr => {
//     return arr +'';
//
// });
// console.log(strings)


/*-------------------exercise-7----------------------*/

// function sortNums(array, direction) {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return array.sort((a, b) => b - a);
//     } else {
//         return array;
//     }
// }
//
// let nums = [11, 21, 3];
//
// console.log(sortNums(nums, 'ascending'));  // [3, 11, 21]
// console.log(sortNums(nums, 'descending')); // [21, 11, 3]




/*-------------------exercise-8----------------------*/


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log('Сортування за спаданням:', coursesAndDurationArray);
//
// let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
// console.log('Курси з тривалістю більше 5 місяців:', filteredCourses);
//
// let coursesWithId = coursesAndDurationArray.map((course, index) => {
//     return { id: index + 1, title: course.title, monthDuration: course.monthDuration };
// });
// console.log('Курси з id:', coursesWithId);


/*-------------------exercise-9----------------------*/




// const suits = ['spade', 'diamond', 'heart', 'club']
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king','ace']
//
// const cards=[];
// for (const suit of suits ) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black'
//         }
//         cards.push(card);
//     }
//
// }
// console.log(cards)
//
// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
//
// console.log(cards.filter(card => card.value ==='6'));
//
// console.log(cards.filter(card => card.color ==='red'));
//
// console.log(cards.filter(card => card.cardSuit ==='diamond'));
//
// console.log(cards.filter(card => card.cardSuit ==='club' && (card.value !=='6' || card.value !=='7' || card.value !=='8' || card.value !=='9')));
//


/*-------------------exercise-10----------------------*/
//
// const suits = ['spade', 'diamond', 'heart', 'club']
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king','ace']
//
// const cards=[];
// for (const suit of suits ) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black'
//         }
//         cards.push(card);
//     }
//
// }
// console.log(cards)
//
// const reduce = cards.reduce((accum, card) =>{
//     switch (card. cardSuit){
//         case 'spade':
//             accum.spades.push(card);
//             break;
//         case 'diamond':
//             accum.diamonds.push(card);
//             break;
//         case 'heart':
//             accum.hearts.push(card);
//             break;
//         case 'club':
//             accum.clubs.push(card);
//             break;
//     }
//     return accum;
// },{
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
//
// });
// console.log(reduce)

/*-------------------exercise-11----------------------*/


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course =>{
    return course.modules.includes('sass')
}));

console.log(coursesArray.filter(course =>{
    return course.modules.includes('docker')
}));







