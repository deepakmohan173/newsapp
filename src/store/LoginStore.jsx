import { Store } from "pullstate";

export const LoginStore = new Store({
    isLoggedIn: true,
    user: {},
})