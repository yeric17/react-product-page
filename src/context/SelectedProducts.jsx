import React, { useState } from 'react'

const Context = React.createContext({})


export function SelectedProducts({ children }) {
    const [selectedProducts, setSelectedProducts] = useState([]);

    return (
        <Context.Provider value={{ selectedProducts, setSelectedProducts }}>
            {children}
        </Context.Provider>
    )

}

export default Context