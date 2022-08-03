import { Store } from "pullstate";

const token = localStorage.getItem("Token");
export const LoginStore = new Store({
  isLoggedIn: token === null ? false : true,
});
