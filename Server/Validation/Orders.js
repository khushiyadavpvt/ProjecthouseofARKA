import joi from 'joi'

export const ValidateOrder = (orderData) =>{

    const Schema = joi.object({

        userId : joi.string().required(),
        products : joi.array().items(joi.object({
            productId : joi.string().required(),
            quantity : joi.number(),
        })),
        amount : joi.number().required(),
        address : joi.object().required(),
        status : joi.string()
    })

    return Schema = validateAsync(orderData)
}

