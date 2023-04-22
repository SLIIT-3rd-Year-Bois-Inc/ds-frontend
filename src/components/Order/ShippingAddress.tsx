import React from "react";

interface IShippingAddressProps {
    className?: string;
}

function ShippingAddress({ className }: IShippingAddressProps) {
  return (
    <div className={`flex p-4 bg-base-100 shadow-md ${className}`}>
      <div className="prose col-span-3">
        <b>Shipping Address</b>
        <br />
        <h4 className="inline pr-4">Dehemi Weerakkody</h4>
        <span>+94 706672525</span>
        <br></br>
        <span>
          33/38 Mawathgama,Homagama,
          <br />
          Colombo (1 - 15), Western,Sri Lanka, 10200
        </span>
      </div>
      <div className="flex flex-grow justify-end items-center">
        <button className="btn btn-primary">Change</button>
      </div>
    </div>
  );
}

export default ShippingAddress;
