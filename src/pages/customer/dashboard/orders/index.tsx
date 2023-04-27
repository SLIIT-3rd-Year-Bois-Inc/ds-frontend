import Layout from "@components/Layout/MainLayout";
import Order, { OrderStatus } from "@components/Order/Order";
import React from "react";

function CustomerDashboard() {
  return (
    <Layout>
      <div className="tabs p-4">
        <a className="tab tab-bordered tab-active">All</a>
        <a className="tab tab-bordered">Ongoing</a>
        <a className="tab tab-bordered">Cancelled</a>
      </div>
      <div className="grid gap-3 p-4">
        <Order />
        <Order status={OrderStatus.CANCELLED} />
        <Order />
      </div>
    </Layout>
  );
}

export default CustomerDashboard;
