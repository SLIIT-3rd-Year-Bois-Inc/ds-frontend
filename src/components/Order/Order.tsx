import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

export enum OrderStatus {
  CANCELLED = "Cancelled",
  DELIVERED = "Delivered",
  ONGOING = "Ongoing",
}

export interface IOrderProps {
  status?: OrderStatus;
}

const getButtons = (status: OrderStatus) => {
    switch (status) {
        case OrderStatus.CANCELLED:
            return (
                <div className="flex flex-row">
                    <button className="btn btn-primary mr-4">Order Again</button>
                    <button className="btn btn-secondary">Delete</button>
                </div>
            );
        case OrderStatus.DELIVERED:
            return (
                <div className="flex flex-row">
                    <button className="btn btn-primary mr-4">Order Again</button>
                    <button className="btn btn-secondary">Delete</button>
                </div>
            );
        case OrderStatus.ONGOING:
            return (
                <div className="flex flex-row">
                    <button className="btn btn-primary mr-4">Track Order</button>
                    <button className="btn btn-warning">Cancel</button>
                </div>
            );
    }
};

function Order({ status = OrderStatus.ONGOING }: IOrderProps) {
  return (
    <div className="flex flex-col px-8 py-4 bg-base-200">
      <div className="flex flex-row">
        <div className="font-bold text-lg">{status}</div>
        <div className="flex-grow"></div>
        <div className="mr-3">
          Order date: Feb 21, 2023
          <br />
          Order ID: 8162838589719830
        </div>
        <button className="btn btn-ghost">
          Order details <FiChevronRight />
        </button>
      </div>
      <div className="divider my-1"></div>
      <div className="flex flex-row">
        <div className="prose">
          From <Link href={"/"}>{"Sketchy health brand"}</Link>
        </div>
        <div className="flex-grow"></div>
        {getButtons(status)}
      </div>
    </div>
  );
}

export default Order;
