'use client'

import "./home.scss";
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/dashboard/sidebar/Sidebar';
import Navbar from './components/dashboard/navbar/Navbar';
import Widget from './components/dashboard/widget/Widget';
import MyBarChart from './components/dashboard/chart/MyBarChart';
import MyPieChart from './components/dashboard/chart/MyPieChart';
import { useState } from "react";
import NotificationsCenter from './components/dashboard/notifications/NotificationsCenter';

const Home = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      />
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />

      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <div className="row mx-auto">
            <div className={`col-lg-${showNotifications ? "9" : "12"} col-md-${showNotifications ? "9" : "12"} col-sm-12 col-12`}>
              <Navbar setShowNotifications={setShowNotifications} showNotifications={showNotifications} />

              <div className="px-2">
                <div className="row mx-auto">
                  <Widget rate="/svg/total_menu.svg" label="Digital tokens created" value="2800" />
                  <Widget rate="/svg/total_revenue.svg" label="Products registered" value="280" />
                  <Widget rate="/svg/total_orders.svg" label="Products unregistered" value="100" />
                  <Widget rate="/svg/total_customers.svg" label="Products reported" value="50" />
                </div>
              </div>

              <div className="row mx-auto mt-3 p-0">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto p-0">
                  <div className="charts">
                    <MyPieChart title="Destination Countries" />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mx-auto p-0">
                  <div className="charts">
                    <MyBarChart title="Status of packages" />
                  </div>
                </div>
              </div>
            </div>

            <NotificationsCenter visible={showNotifications} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
