import { IoIosClose } from "react-icons/io";

export const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props
    return (
        <div
            className="flex justify-between items-center mb-3">
            <div
                className="flex items-center gap-2 ">
                <figure className="w-24 h-24">
                    <img
                     className=" w-full h-full rounded-lg object-cover shadow-lg shadow-zinc-700" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div  className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
                <IoIosClose 
                onClick={()=>handleDelete(id)}
                className="cursor-pointer ml-2" />
            </div>

        </div>
    )
}
