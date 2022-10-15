import { http } from "./config";

export default {
  signin: (userAuth) => {
    return http.post("/auth/signin", userAuth);
  },
  signup: (userData) => {
    return http.post("/auth/signup", userData);
  },
};
