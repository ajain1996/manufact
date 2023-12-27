"use client"

import React from 'react';
import './orders.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/dashboard/navbar/Navbar';
import Sidebar from '../components/dashboard/sidebar/Sidebar';
import Image from 'next/image';

const rows = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        role: "owner",
        phone: 987654321,
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Michael Doe",
        role: "owner",
        phone: 987654321,
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "John Smith",
        role: "owner",
        phone: 987654321,
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Jane Smith",
        role: "owner",
        phone: 987654321,
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customer: "Harold Carol",
        role: "owner",
        phone: 987654321,
    },
];

const Orders = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
                <Navbar />
                <div className='p-4'>
                    <TableContainer component={Paper} className="table">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell colSpan={4} className="tableCell fw-bold custom-header-cell">
                                        Orders
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="tableCell fw-bold ml-5">Food Item</TableCell>
                                    <TableCell className="tableCell fw-bold text-center">Customer</TableCell>
                                    <TableCell className="tableCell fw-bold text-center">Date</TableCell>
                                    <TableCell className="tableCell fw-bold text-center">Total</TableCell>
                                    <TableCell className="tableCell fw-bold text-center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell className="tableCell">
                                            <div className="cellWrapper d-flex">
                                                <img src={row.img} alt="" className="image" />
                                                <div className='cellName'>Double Cheeseburger</div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="tableCell text-center">
                                            <div className='cellCustomer'>Ilham Budi Agung</div>
                                            <div className='cellCustomerEmail'>Johnb@mail.com</div>
                                        </TableCell>
                                        <TableCell className="tableCell text-center cellDate">29 Dec 2023</TableCell>
                                        <TableCell className="tableCell text-center">$121.00</TableCell>
                                        <TableCell className="tableCell items-center">
                                            <Image
                                                src="/svg/trash.svg"
                                                alt="trash"
                                                width={16}
                                                height={16}
                                                className='mx-auto'
                                                style={{ cursor: "pointer" }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
};

export default Orders;