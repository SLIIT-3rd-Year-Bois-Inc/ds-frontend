import AdminLayout from "@components/Admin/Layout";
import { Portal } from "@components/Portal/Portal";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getProducts } from "../../../api/Rest";
import axios from "axios";
import OrderRow from "@components/Order/OrderRow";
import OrderEditor from "@components/Order/OrderEditor";

function AdminProductsView() {
  const [orderEditor, setOrderEditor] = useState<{
    id: string;
    open: boolean;
    newProduct: boolean;
  }>({
    id: "",
    open: false,
    newProduct: false,
  });
  const qc = useQueryClient();

  const deletMutation = useMutation({
    mutationFn: async (id: string) => {
      await axios.delete(`/orders/${id}`);
      qc.invalidateQueries(["orders"]);
      return;
    },
  });

  const orderQuery = useQuery(["orders"], getProducts);

  const updateProduct = () => {
    setOrderEditor((prev) => {
      return { ...prev, open: false };
    });
  };

  return (
    <AdminLayout>
      <div className="w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orderQuery.data?.products.map((product) => {
              return (
                <OrderRow
                  key={product._id}
                  order={product}
                  onPressEdit={() => {
                    setOrderEditor({
                      id: product._id ?? "",
                      open: true,
                      newProduct: false,
                    });
                  }}
                  onPressDelete={deletMutation.mutate}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end px-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            setOrderEditor({ id: "", open: true, newProduct: true });
          }}
        >
          Add Product
        </button>
      </div>
      <Portal open={orderEditor.open}>
        <OrderEditor
          id={orderEditor.id}
          onClose={updateProduct}
          newOrder={orderEditor.newProduct}
        />
      </Portal>
    </AdminLayout>
  );
}

export default AdminProductsView;
