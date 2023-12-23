import { useContext } from "react"
import { ShoppingCartContext } from "../context/Context"
import { TbSquareRoundedPlus } from "react-icons/tb";



export const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext)
    return (
        <div className="bg-slate-200 cursor-pointer w-56 h-60 max-w-52 rounded-xl ">
            <figure className="relative mb-3 w-full h-4/6 ">
                <span className="absolute bottom-0 left-0 bg-sky-100/60 px-2 py-0.5 m-1 rounded-lg text-black text-xs" >{data.category}</span>
                <img className="w-full h-full object-cover rounded-tr-lg rounded-tl-lg" src={data.image} alt={data.title} />
                <div
                    className="absolute right-2 top-2 flex justify-center items-center bg-white w-5 h-5 rounded-full"
                    onClick={() => context.setCountCart(context.countCart + 1)}
                >
                 <TbSquareRoundedPlus className="h-5 w-5 "  />
                </div>
            </figure>
            <p className="flex justify-between px-2">
                <span className="text-xs font-light ">{data.title}</span>
                <span className="text-lg font-semibold ">{data.price}</span>
            </p>
        </div>
    )
}
