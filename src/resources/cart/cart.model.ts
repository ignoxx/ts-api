import { Schema, model } from "mongoose"
import Cart from "@/resources/cart/cart.interface"

const CartSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: false },
})

export default model<Cart>("Cart", CartSchema)
