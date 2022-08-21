import { Router, Request, Response, NextFunction } from "express"
import Controller from "@/utils/interfaces/controller.interface"
import HttpException from "@/utils/exceptions/http.exception"
import validationMiddleware from "@/middleware/validation.middleware"
import validate from "@/resources/cart/cart.validation"
import CartService from "@/resources/cart/cart.service"

class CartController implements Controller {
    public path = "/carts"
    public router = Router()
    private CartService = new CartService()

    constructor() {
        this.initRoutes()
    }

    initRoutes(): void {
        this.router.post(
            this.path,
            validationMiddleware(validate.create),
            this.create
        )
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const data = req.body
            const cart = await this.CartService.create(data)

            res.status(201).json({ cart })
        } catch (error: any) {
            next(new HttpException(400, error.message))
        }
    }
}

export default CartController
