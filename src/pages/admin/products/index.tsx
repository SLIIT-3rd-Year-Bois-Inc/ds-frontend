import AdminLayout from "@components/Admin/Layout";
import { Portal } from "@components/Portal/Portal";
import ProductEditor from "@components/Product/ProductEditor";
import ProductRow from "@components/Product/ProductRow";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../../api/Rest";

function AdminProductsView() {
  const [productEditor, setProductEditor] = useState<{
    id: string;
    open: boolean;
    newProduct: boolean;
  }>({
    id: "",
    open: false,
    newProduct: false,
  });
  const productQuery = useQuery(["products"], getProducts);

  const updateProduct = () => {
    setProductEditor((prev) => {
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
            {productQuery.data?.products.map((product) => {
              return (
                <ProductRow
                  key={product.id}
                  product={product}
                  onPressEdit={() => {
                    setProductEditor({
                      id: product.id ?? "",
                      open: true,
                      newProduct: false,
                    });
                  }}
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
            setProductEditor({ id: "", open: true, newProduct: true });
          }}
        >
          Add Product
        </button>
      </div>
      <Portal open={productEditor.open}>
        <ProductEditor
          onClose={updateProduct}
          newProduct={productEditor.newProduct}
        />
      </Portal>
    </AdminLayout>
  );
}

export default AdminProductsView;
