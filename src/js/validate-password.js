// ? дефолтный экспорт

// export default 555;



// ! для библиотек испо-м абсолютній импорт

import Joi from 'joi';

console.log(Joi)

const passSchena = Joi.string().min(3).max(10);

export default function validatePassword(password) {
    return passSchena.validate(password);
}