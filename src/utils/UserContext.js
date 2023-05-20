import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Harshal Bro",
    email: "abc@gmail.com",
  },
});

export default UserContext;
