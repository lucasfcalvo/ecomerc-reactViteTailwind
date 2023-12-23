import { useContext } from "react"
import { ShoppingCartContext } from "../context/Context"
import { TbSquareRoundedPlus } from "react-icons/tb";



export const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCountCart(context.countCart + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    //    console.log('Cart:', context.cartProducts)
    }

    return (
        <div
            className="bg-slate-200 cursor-pointer w-56 h-60 max-w-52 rounded-xl "
            onClick={() => showProduct(data)}
        >
            <figure className="relative mb-3 w-full h-4/5 ">
                <span className="absolute bottom-0 left-0 bg-sky-100/60 px-2 py-0.5 m-1 rounded-lg text-black text-xs" >{data.category.name}</span>
                <img className="w-full h-full object-cover rounded-tr-lg rounded-tl-lg" src={data.images[0]} alt={data.title} />
                <div
                    className="absolute right-2 top-2 flex justify-center items-center bg-white w-5 h-5 rounded-full"
                    onClick={(event) => addProductToCart(event, data)}
                >
                    <TbSquareRoundedPlus
                        className="h-5 w-5 " />
                </div>
            </figure>
            <p className="flex justify-between px-2">
                <span className="text-xs font-light ">{data.title}</span>
                <span className="text-lg font-semibold ">${data.price}</span>
            </p>
        </div>
    )
}
