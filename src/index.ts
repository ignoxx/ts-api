import config from "config"
import "module-alias/register"
import App from "./app"

import CartController from "@/resources/cart/cart.controller"

const app = new App([new CartController()], config.get("app.port"))

app.listen()
