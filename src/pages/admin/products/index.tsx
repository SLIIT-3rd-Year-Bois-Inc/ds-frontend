import AdminLayout from "@components/Admin/Layout";
import ProductRow from "@components/Product/ProductRow";
import React from "react";

function AdminProductsView() {
  return (
    <AdminLayout>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow />
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default AdminProductsView;
