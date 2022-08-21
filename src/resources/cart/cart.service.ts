import CartModel from "@/resources/cart/cart.model"
import Cart from "@/resources/cart/cart.interface"

class CartService {
    /**
     * Create a new cart
     */
    public async create(data: Cart): Promise<Cart> {
        try {
            const cart = await CartModel.create(data)
            return cart
        } catch (error) {
            throw new Error("Unable to create cart")
        }
    }
}

export default CartService
