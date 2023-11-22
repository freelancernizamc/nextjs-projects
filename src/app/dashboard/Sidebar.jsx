import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open bg-blue-800 shadow-2xl">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-gradient-to-r from-red-500 to-blue-500 shadow-2xl">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-white">
                    {/* Sidebar content here */}
                    <li className='shadow-2xl'><Link href='/dashboard/addproduct'>Add Product</Link></li>
                    <li><Link href='/dashboard/myaccount'>My Account</Link></li>
                </ul>

                <li className='btn bg-gradient-to-r from-green-900 to bg-pink-800 w-full text-white'><Link href='/dashboard/myaccount'>LogOut</Link></li>
            </div>
        </div>
    );
};

export default Sidebar;