import Joi from "joi"

const create = Joi.object({
    title: Joi.string().required(),
    image: Joi.string().optional(),
})

export default { create }
