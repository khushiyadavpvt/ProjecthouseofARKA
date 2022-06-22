import joi from 'joi';

export const ValidateRegister = (userData) =>{

    const Schema = joi.object({

        username : joi.string()
        .min(3)
        .max(30)
        .required(),
        email : joi.string().email().required(),
        password : joi.string().required().pattern(new RegExp('^[a-zA-Z0-9@$!%*#?&]{6,30}$')),
        isAdmin : joi.boolean()
    })

    return Schema.validateAsync(userData)
    
}

export const ValidateLogin = (userData) =>{

    const Schema = joi.object({

        email : joi.string().email().required(),
        password : joi.string().required(),
    })

    return Schema.validateAsync(userData)
}