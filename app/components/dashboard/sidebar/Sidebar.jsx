import Image from "next/image";
import "./sidebar.scss";
import Link from "next/link";
import { useState } from "react";

const DashboardList = [
    {
        title: "Dashboards",
        nav: "/",
        image: "/svg/dashboard-user.svg"
    },
    {
        title: "Products",
        nav: "/orders",
        image: "/svg/Twiter.svg"
    },
    {
        title: "Smart Seals",
        nav: "/",
        image: "/images/b3.png"
    },
    {
        title: "Users",
        nav: "/",
        image: "/svg/woman.svg"
    },
    {
        title: "Admin",
        nav: "/",
        image: "/svg/userProfile.svg"
    },
]

const Sidebar = () => {
    const [selectedText, setSelectedText] = useState(0);

    return (
        <div className="sidebar pr-5" style={{ backgroundColor: "#fff", width: "260px" }}>
            <div className="top mt-3">
                <Link href="/" className="text-black text-decoration-none">
                    <h4 style={{ fontWeight: "bold", marginLeft: "-64px" }}>Manufact</h4>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    {
                        DashboardList.map((item, indx) => {
                            return (
                                <Link href={item?.nav} style={{ textDecoration: "none" }} key={indx} onClick={() => {
                                    setSelectedText(indx)
                                }}>
                                    <li className='mb-2 dashboard-item my-2'
                                        style={{ backgroundColor: selectedText === indx ? "#EEE" : "#FFF" }}
                                    >
                                        <div className="d-flex">
                                            <Image
                                                src={item?.image} alt="Bell Icon"
                                                className="dashboard_image"
                                                width={32} height={32}
                                                style={{ width: "20px", height: "20px", marginTop: "2px" }}
                                            />
                                            <div className="pl-2">
                                                <span
                                                    className="text-black"
                                                    style={{ fontSize: 14, fontWeight: "400" }}
                                                >
                                                    {item?.title}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;