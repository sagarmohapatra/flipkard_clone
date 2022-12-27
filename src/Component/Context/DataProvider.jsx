import React from "react"

const DataContext = React.createContext()

const DataProvider = ({ children }) => {
    const [accounts, setaccounts] = React.useState("")
    return (
        <DataContext.Provider value={
            {
                accounts,
                setaccounts
            }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider
