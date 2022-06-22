import joi from 'joi';

export const ValidateCart = (cartData) =>{

    const Schema = joi.object({

        userId : joi.string().required(),
        products : joi.array().items(joi.object({
            productId : joi.string().required(),
            quantity : joi.number(),
        }))
    });

    return Schema.validateAsync(cartData);
}

export const ValidateUserId = (userId) => {

    const Schema = joi.object({

        userId : joi.string().required()
    })

    return Schema.validateAsync(userId);
}