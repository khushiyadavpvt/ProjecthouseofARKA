import joi from 'joi'

export const ValidateProduct = (productData) => {

    const Schema = joi.object({

        title : joi.string().required(),
        description : joi.string().required,
        image : joi.string().required,
        categories : joi.array(),
        size : joi.string(),
        color : joi.string(),
        price : joi.number().required(),

    })

    return validateAsync(productData);
}