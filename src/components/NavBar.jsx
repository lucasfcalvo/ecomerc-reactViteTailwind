import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../context/Context";
import { LiaOpencart } from "react-icons/lia";

export const NavBar = () => {
    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-8 font-semibold'

    const isActive = ({ isActive }) =>
        isActive ? activeStyle : undefined
    return (
        <nav
            className="flex justify-between items-center fixed z-10 w-full py-5 px-7 text-sm font-light rounded-b-lg border-2 h-8 top-0 bg-gray-200 border-slate-700" >
            <ul className="flex items-center gap-3">
                <li className="font-extrabold text-lg  ">
                    <NavLink
                        to='/'
                    >
                        Shoppy
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to='/'
                        className={isActive}>
                        All
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={isActive}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={isActive}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={isActive}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={isActive}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={isActive}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    lf@example.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={isActive}>
                        My Orders
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={isActive}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={isActive}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex justify-between">
                <LiaOpencart className="w-7 h-7 mr-1 text-emerald-700" />
                    <div className="font-semibold text-xs top-0 right-5" >{context.countCart}</div>
                </li>

            </ul>
        </nav>
    )
}
