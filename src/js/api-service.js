// ? дефолтній экспорт

// const fetchAllUsers = () => {
//     console.log('fetchAllUsers')
// };

// const fetchUsersById = id => {
//     console.log('fetchUsersById')
// };

// const updateUsersById = id => {
//     console.log('updateUsersById')
// };



// export default { fetchAllUsers, fetchUsersById, updateUsersById }

// ? именованій экспорт

export const fetchAllUsers = () => {
    console.log('fetchAllUsers')
};

export const fetchUsersById = id => {
    console.log('fetchUsersById')
};

export const updateUsersById = id => {
    console.log('updateUsersById')
};
// просто значение єкспортировать нельзя, можно сущность
// напр переменную
export const x = 5;
export const y = 'mango'