import './Notifications.scss'
import React from 'react'
import Link from "next/link";
import Image from "next/image";

const NotificationsList = [
    {
        title: "Approve or reject",
        time: "Just now",
        nav: "/",
        image: "/images/b1.png"
    },
    {
        title: "You have a new request",
        time: "59 minutes ago",
        nav: "/",
        image: "/images/b2.png"
    },
    {
        title: "Approve or reject",
        time: "12 hours ago",
        nav: "/",
        image: "/images/b3.png"
    },
    {
        title: "Approve or reject",
        time: "Today, 11:59 AM",
        nav: "/",
        image: "/images/b1.png"
    },
]

const ActivitiesList = [
    {
        title: "New product created",
        time: "Just now",
        nav: "/",
        image: "/images/b1.png"
    },
    {
        title: "New token registered",
        time: "59 minutes ago",
        nav: "/",
        image: "/images/b2.png"
    },
    {
        title: "New product unsealed",
        time: "12 hours ago",
        nav: "/",
        image: "/images/b3.png"
    },
    {
        title: "New",
        time: "Today, 11:59 AM",
        nav: "/",
        image: "/images/b1.png"
    },
]

export default function NotificationsCenter({ visible }) {
    if (!visible) return null;

    return (
        <div className="col-lg-3 col-md-3 col-sm-0 col-0 p-0 notification_center">
            <li className="notification_title ml-5 pl-2 mb-3">Notifications</li>
            <ul>
                {
                    NotificationsList.map((item, indx) => {
                        return (
                            <Link href="/" style={{ textDecoration: "none" }} key={indx}>
                                <div className='mb-2 notification_item'>
                                    <div className="d-flex">
                                        <Image
                                            src={item.image} alt="Bell Icon" className="notification_image"
                                            width={32} height={32}
                                        />
                                        <div className="pl-2">
                                            <div className="notification_text">
                                                {item.title}
                                            </div>
                                            <div className="notification_time">
                                                {item.time}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }
            </ul>

            <li className="notification_title ml-5 pl-2 mb-3">Activities</li>
            <ul>
                {
                    ActivitiesList.map((item, indx) => {
                        return (
                            <Link href="/" style={{ textDecoration: "none" }} key={indx}>
                                <li className='mb-2 notification_item'>
                                    <div className="d-flex">
                                        <Image
                                            src={item.image} alt="Bell Icon" className="notification_image"
                                            width={32} height={32}
                                        />
                                        <div className="pl-2">
                                            <div className="notification_text">
                                                {item.title}
                                            </div>
                                            <div className="notification_time">
                                                {item.time}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        );
                    })
                }
            </ul>
        </div>
    )
}
