import { createContext, useContext } from 'react'

function createStores() {
    return {}
}

const stores = createStores()
const StoresContext = createContext(stores)
const useStores = () => useContext(StoresContext)

function useTodoStore() {
    const { todoStore } = useStores()
    return todoStore
}

export { stores, useStores, StoresContext, useTodoStore }
