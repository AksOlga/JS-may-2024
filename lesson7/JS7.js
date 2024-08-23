/*-------------------exercise-1----------------------*/
//
// function User (id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this. email = email;
//     this.phone= phone;
// }
//
// let newUser = [
//     new User(7, 'Dmitry', 'Volkov', 'dmitry@example.com', '5678901234'),
//     new User(1, 'Ivan', 'Ivanov', 'ivan@example.com', '1234567890'),
//     new User(2, 'Petr', 'Petrov', 'petr@example.com', '0987654321'),
//     new User(3, 'Olga', 'Sidorova', 'olga@example.com', '5678901234'),
//     new User(10, 'Natawa', 'Nataweva', 'nata@example.com', '1639264839'),
//     new User(4, 'Maria', 'Kuznetsova', 'maria@example.com', '2345678901'),
//     new User(9, 'Mawa', 'Mawina','mawa@example.com', '1425161882'),
//     new User(5, 'Sergey', 'Smirnov', 'sergey@example.com', '3456789012'),
//     new User(6, 'Elena', 'Morozova', 'elena@example.com', '4567890123'),
//     new User(8, 'Natalia', 'Karpova', 'natalia@example.com', '6789012345'),
//
//
// ];
// console.log(newUser)

/*-------------------exercise-2----------------------*/
//
// function filterFunction(user){
//     return user.id%2 ===0;
// }
// const filteredFunction =newUser.filter(filterFunction);
// console.log(filteredFunction)

/*-------------------exercise-3----------------------*/

// let sort = newUser.sort((u1, u2) => {
//     return u1.id - u2.id
// })
// console.log(sort)

/*-------------------exercise-4----------------------*/
//
// function Client(id, name, surname , email, phone, order ) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this. email = email;
//         this.phone = phone;
//         this. order = order;
//     }
// let clients = [
// new Client(1, 'Ivan', 'Ivanov', 'ivan@example.com', '1234567890', ['item1', 'item2']),
// new Client(2, 'Petr', 'Petrov', 'petr@example.com', '0987654321', ['item3', 'item4','item20','item20','item20']),
// new Client(3, 'Olga', 'Sidorova', 'olga@example.com', '5678901234', ['item5', 'item6', 'item6']),
// new Client(4, 'Maria', 'Kuznetsova', 'maria@example.com', '2345678901', ['item7', 'item8']),
// new Client(5, 'Sergey', 'Smirnov', 'sergey@example.com', '3456789012', ['item9', 'item10']),
// new Client(6, 'Elena', 'Morozova', 'elena@example.com', '4567890123', ['item11', 'item12', 'item6']),
// new Client(7, 'Dmitry', 'Volkov', 'dmitry@example.com', '5678901234', ['item13', 'item14','item6','item6']),
// new Client(8, 'Natalia', 'Karpova', 'natalia@example.com', '6789012345', ['item15', 'item16']),
// new Client(9, 'Mawa', 'Mawina', 'mawa@example.com', '1425161882', ['item17', 'item18']),
// new Client(10, 'Natawa', 'Nataweva', 'nata@example.com', '1639264839', ['item19', 'item20','item20','item20']),
//
// ]
// console.log(clients)
/*-------------------exercise-5----------------------*/

// clients.sort((a, b) => a.order.length - b.order.length);
// console.log(clients);

/*-------------------exercise-6----------------------*/

//
// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//
//         this.drive = function () {
//                 console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//         };
//         this.info = function() {
//                 console.log(`Модель: ${this.model}`);
//                 console.log(`Виробник: ${this.manufacturer}`);
//                 console.log(`Рік випуску: ${this.year}`);
//                 console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
//                 console.log(`Об'єм двигуна: ${this.engineVolume} л`);
//                 if (this.driver) {
//                         console.log(`Водій: ${this.driver.name}, Вік: ${this.driver.age}`);
//                 }
//         };
//
//         this.increaseMaxSpeed = function (newSpeed) {
//                 this.maxSpeed = this.maxSpeed + newSpeed;
//
//         };
//
//         this.changeYear = function (newYear) {
//                 this.year = newYear;
//         };
//
//         this.addDriver = function (driver) {
//                 this.driver = driver;
//         }
// }
//
// let myCar = new Car('Model S', 'Tesla', 2020, 250, 3.5);
// console.log(new Car)
// myCar.drive();
// myCar.info();
// myCar.increaseMaxSpeed(20);
// myCar.changeYear(2022);
// myCar.addDriver({ name: 'Іван', age: 30 });
// myCar.info();
//




/*-------------------exercise-7----------------------*/


//
// class Car {
//         constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//                 this.model = model;
//                 this.manufacturer = manufacturer;
//                 this.year = year;
//                 this.maxSpeed = maxSpeed;
//                 this.engineVolume = engineVolume;
//         }
//
//         drive() {
//                 console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//         }
//
//
//         info() {
//                 console.log(`Модель: ${this.model}`);
//                 console.log(`Виробник: ${this.manufacturer}`);
//                 console.log(`Рік випуску: ${this.year}`);
//                 console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
//                 console.log(`Об'єм двигуна: ${this.engineVolume} л`);
//                 if (this.driver) {
//                         console.log(`Водій: ${this.driver.name}, Вік: ${this.driver.age}`);
//                 }
//         }
//
//
//         increaseMaxSpeed(newSpeed) {
//                 this.maxSpeed += newSpeed;
//                 console.log(`Нова максимальна швидкість: ${this.maxSpeed} км/год`);
//         }
//
//
//         changeYear(newValue) {
//                 this.year = newValue;
//                 console.log(`Рік випуску змінено на: ${this.year}`);
//         }
//
//
//         addDriver(driver) {
//                 this.driver = driver;
//                 console.log(`Додано водія: ${driver.name}, Вік: ${driver.age}`);
//         }
// }
//
//
// let myCar = new Car('Model S', 'Tesla', 2020, 250, 3.5);
//
// myCar.drive();
// myCar.info();
//
// myCar.increaseMaxSpeed(20);
// myCar.changeYear(2022);
//
// myCar.addDriver({ name: 'Іван', age: 30 });
// myCar.info();



/*-------------------exercise-8----------------------*/

// class Cinderella {
//         constructor(name, age, footSize) {
//                 this.name = name;
//                 this.age = age;
//                 this.footSize = footSize;
//         }
// }
//
// class Prince {
//         constructor(name, age, foundShoeSize) {
//                 this.name = name;
//                 this.age = age;
//                 this.foundShoeSize = foundShoeSize;
//         }
//
//
//         findCinderellaByLoop(cinderellas) {
//                 for (let cinderella of cinderellas) {
//                         if (cinderella.footSize === this.foundShoeSize) {
//                                 console.log(`Золушка по имени ${cinderella.name} должна быть с принцем ${this.name}`);
//                                 return cinderella;
//                         }
//                 }
//                 console.log("Золушка не найдена!");
//                 return null;
//         }
//
//
//         findCinderellaByFind(cinderellas) {
//                 const cinderella = cinderellas.find(cinderella => cinderella.footSize === this.foundShoeSize);
//                 if (cinderella) {
//                         console.log(`Золушка по имени ${cinderella.name} найдена через find и должна быть с принцем ${this.name}`);
//                 } else {
//                         console.log("Золушка не найдена через find!");
//                 }
//                 return cinderella;
//         }
// }
//
//
// let cinderellas = [
//         new Cinderella('Anna', 19, 36),
//         new Cinderella('Olga', 20, 37),
//         new Cinderella('Ira', 21, 38),
//         new Cinderella('Katya', 22, 39),
//         new Cinderella('Lena', 23, 40),
//         new Cinderella('Vera', 24, 35),
//         new Cinderella('Masha', 25, 37),
//         new Cinderella('Dasha', 26, 38),
//         new Cinderella('Sasha', 27, 36),
//         new Cinderella('Nina', 28, 39)
// ];
//
//
// let prince = new Prince('Vladimir', 30, 38);
//
// prince.findCinderellaByLoop(cinderellas);
//
//
// prince.findCinderellaByFind(cinderellas);


/*-------------------exercise-9----------------------*/

Array.prototype.myForEach = function(callback) {
        for (let i = 0; i < this.length; i++) {
                callback(this[i], i, this);
        }
};

const arr = [1, 2, 3];
arr.myForEach((element, index, array) => {
        console.log(`Element: ${element}, Index: ${index}`);
});
Array.prototype.myFilter = function(callback) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
                if (callback(this[i], i, this)) {
                        result.push(this[i]);
                }
        }
        return result;
};
const arr = [1, 2, 3, 4];
const filteredArr = arr.myFilter((element, index, array) => {
        return element > 2;
});

console.log(filteredArr); // [3, 4]





