import { useContext } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ShoppingCartContext } from "../context/Context";
import { OrderCard } from "./OrderCard";

export const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)
    const handleDelete =(id)=>{
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 top-11 border bg-white border-black rounded-lg `}>
            <div className="flex justify-between items-center p-2">
                <h2 className="font-medium text-xl">My Order</h2>
                <div
                    className="cursor-pointer"
                    onClick={context.closeCheckoutSideMenu}
                >
                    <IoMdCloseCircleOutline className="w-5 h-5" />
                </div>
            </div>
            <div
                className="px-3 overflow-y-scroll">{
                    context.cartProducts.map(productItem => (
                        <OrderCard
                            key={productItem.id}
                            id={productItem.id}
                            title={productItem.title}
                            imageUrl={productItem.images}
                            price={productItem.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }</div>
        </aside>
    )

}
