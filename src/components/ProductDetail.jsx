import { useContext } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ShoppingCartContext } from "../context/Context";


export const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'}  product-detail flex-col fixed right-0 top-11 border bg-white border-black rounded-lg `}>
            <div className="flex justify-between items-center p-2">
                <h2 className="font-medium text-xl">Detail</h2>
                <div
                    className="cursor-pointer"
                    onClick={context.closeProductDetail}
                >
                    <IoMdCloseCircleOutline className="w-5 h-5" />
                </div>
            </div>
            <figure className="px-3">
                <img
                className="w-full h-full rounded-lg"
                src={context.productToShow.images[0]} 
                alt={context.productToShow.title} />

            </figure>
            <p className="flex flex-col p-6">
                <span className="font-bold text-xl mb-2">${context.productToShow.price}</span>
                <span className="font-medium text-lg">{context.productToShow.title}</span>
                <span className="font-light text-sm">{context.productToShow.description}</span>
            </p>

        </aside>
    )
}
