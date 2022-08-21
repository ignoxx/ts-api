import { Request, Response, NextFunction, RequestHandler } from "express"
import Joi from "joi"

function validationMiddleware(schema: Joi.Schema): RequestHandler {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        const validationOptions = {
            abortEarly: false, // don't stop validation after first error against the schema
            allowUnknown: true, // don't crash on unknown data
            stripUnknown: true, // strip out the unknown data
        }

        try {
            const value = await schema.validateAsync(
                req.body,
                validationOptions
            )
            req.body = value
            next()
        } catch (e: any) {
            const errors: string[] = []
            e.details.forEach((error: Joi.ValidationErrorItem) => {
                errors.push(error.message)
            })
            res.status(400).send({ errors })
        }
    }
}

export default validationMiddleware
