import { createContext, useState } from "react"

export const DataContext = createContext(null)

const DataProvider = ({ children }) => {
    const [accounts, setaccounts] = useState('')
    return (
        <DataContext.Provider value={{
            accounts,
            setaccounts
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider
