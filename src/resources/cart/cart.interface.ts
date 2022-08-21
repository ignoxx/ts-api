import { Document } from "mongoose"

export default interface Cart extends Document {
    title: string
    image?: string
}
