import { createContext, useState } from "react";

export const Cartt = createContext();

const Context = ({ children }) => {
    const [cart, setCart] = useState([])
    return (

        <Cartt.Provider value={{ cart, setCart }}>{children}</Cartt.Provider>
    )
}

export default Context