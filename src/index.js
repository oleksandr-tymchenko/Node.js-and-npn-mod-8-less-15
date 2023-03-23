// ? дефолтный импорт - приходит только то что указано в дефолтном импорте
// название импортируемого файла не обяз должно совпадать с єкспрортруемім
// но так лучше

import validatePassword from './js/validate-password';

console.log(validatePassword('wefnjewkvn'))

// ? импорт из файла api-service

import apiService from './js/api-service';

// ? именованній импорт (передаем точніе значения)

// import {
//     fetchAllUsers,
//     fetchUsersById,
//     updateUsersById,
//     x as value,  // можно переименовать
//     y as name  // можно переименовать
// } from './js/api-service';

// ! Импорт пространства имен - импортирует все

import * as apiService from './js/api-service';



// // console.log(validatePassword);

// // console.log(validatePassword('qweqwe'))

// // console.log(apiService)

// console.log(fetchAllUsers);
// console.log(fetchUsersById);
// console.log(updateUsersById);
// console.log(value);
// console.log(name);

console.log(apiService)


