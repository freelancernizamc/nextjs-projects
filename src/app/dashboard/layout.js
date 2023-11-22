import React from 'react';
import Sidebar from './Sidebar';

export const metadata = {
    title: 'Dashboard ~ Practice Next js',
    description: 'Dashboard ~ Practice Next js',
}

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div className="">{children}</div>
        </div>
    );
};

export default DashboardLayout;