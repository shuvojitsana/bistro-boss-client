import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart();

    // TODO load data from the server to dynamic  is admin bases on dynamic
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashBoard/adminHome'><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashBoard/addItem'><FaUtensils></FaUtensils> Add An Item</NavLink></li>
                            <li><NavLink to='/dashBoard/manageItems'><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to='/dashBoard/manageBookings'><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashBoard/allUsers'><FaUsers></FaUsers> All Users
                            </NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                        </> : <>
                            <li><NavLink to='/dashBoard/userHome'><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to='/dashBoard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                            <li><NavLink to='/dashBoard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li><NavLink to='/dashBoard/myCart'><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge badge-secondary">+{cart?.length || 0}</span>
                            </NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>

                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default DashBoard;
