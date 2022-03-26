import config from "config"
import "module-alias/register"
import App from "./app"

const app = new App([], config.get("app.port"))
