import { IoMdCloseCircleOutline } from "react-icons/io";
export const ProductDetail = () => {
    return (
        <aside className='product-detail flex flex-col fixed right-0 top-11 border bg-white border-black rounded-lg '>
            <div className="flex justify-between items-center p-2">
                <h2 className="font-medium text-xl">Detail</h2>
                <div>
                   
                   <IoMdCloseCircleOutline className="w-5 h-5"/>
                </div>
            </div>

        </aside>
    )
}
