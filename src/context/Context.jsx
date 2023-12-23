import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // shopping cart . increment quantity
    const [countCart, setCountCart] = useState(0)

    //Product Detail open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product Detail show product

    const [productToShow, setProductToShow] = useState({})



    return (
        <ShoppingCartContext.Provider value={{
            countCart,
            setCountCart,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow, 
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}