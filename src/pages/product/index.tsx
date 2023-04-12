import Layout from "@components/Layout";
import ProductPreview from "@components/Product/ProductPreview";
import React from "react";
import { useQuery } from "react-query";
import { getProductDetails, getProducts } from "../../api/Rest";

function ProductPage() {
    const productDetailsQuery = useQuery(["product-details"], getProductDetails);
        
    console.log(productDetailsQuery.data)
    return (
        <Layout>
            <main>
                <div className="grid grid-cols-2">
                    {/* Product Preview */}
                    <ProductPreview product={productDetailsQuery.data?.product} />
                    {/* Product functions  */}
                    <div className="grid">
                        
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default ProductPage;