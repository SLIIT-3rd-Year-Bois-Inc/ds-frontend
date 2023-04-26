import React from "react";
import { Formik } from "formik";
import { productSchema } from "../../schema/schema";
import { useMutation } from "react-query";
import { Config } from "../../config/endpoints";
import axios from "axios";

interface IProductEditorProps {
  onClose?: () => void;
  newProduct: boolean;
}

interface IProductForm {
  name: string;
  description: string;
  price: string | number;
  seller_id: string;
  image_urls?: string[];
  category: string;
}

function ProductEditor({ onClose, newProduct }: IProductEditorProps) {
  const mutation = useMutation({
    mutationFn: async (productDetails: IProductForm) => {
      productDetails.image_urls = [];
      productDetails.price = parseFloat(productDetails.price.toString());

      let resp = await axios.post(
        `${Config.apiEndpoint}/items/`,
        productDetails
      );
      return resp.data;
    },
    onSuccess: () => {
      onClose && onClose();
    }
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
          seller_id: "cat1",
          category: "cat1",
        }}
        onSubmit={mutation.mutate}
        validationSchema={productSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isValid
          } = props;
          return (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 m-[8em] p-8 bg-base-100 rounded-xl"
            >
              <div className="flex flex-row gap-4">
                <div className="flex-[0.6]">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="input input-bordered"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {errors.name && touched.name && (
                    <div className="input-feedback">{errors.name}</div>
                  )}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Description</span>
                    </label>
                    <textarea
                      placeholder="Product Description"
                      className="textarea h-24 textarea-bordered"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    {errors.description && touched.description && (
                      <div className="input-feedback">{errors.description}</div>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Price"
                      className="input input-bordered"
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.price && touched.price && (
                      <div className="input-feedback">{errors.price}</div>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Category</span>
                    </label>
                    <select
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="select select-bordered w-full"
                    >
                      <option value="cat1" selected>
                        Category 1
                      </option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller</span>
                    </label>
                    <select
                      name="seller_id"
                      value={values.seller_id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="select select-bordered w-full"
                    >
                      <option value="cat1" selected>
                        Category 1
                      </option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                    </select>
                  </div>
                </div>
                <div className="flex-[0.4]">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Image</span>
                    </label>
                    <div className="flex flex-row gap-4">
                      <div className="flex-[0.5]">
                        <div className="card bordered">
                          <figure>
                            <img
                              src="https://picsum.photos/id/1005/400/250"
                              alt="Placeholder"
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="flex-[0.5]">
                        <div className="card bordered">
                          <figure>
                            <img
                              src="https://picsum.photos/id/1005/400/250"
                              alt="Placeholder"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Image</span>
                    </label>
                    <div className="flex flex-row gap-4">
                      <div className="flex-[0.5]">
                        <div className="card bordered">
                          <figure>
                            <img
                              src="https://picsum.photos/id/1005/400/250"
                              alt="Placeholder"
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="flex-[0.5]">
                        <div className="card bordered">
                          <figure>
                            <img
                              src="https://picsum.photos/id/1005/400/250"
                              alt="Placeholder"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Image</span>
                    </label>
                    <div className="flex flex-row gap-4">
                      <div className="flex-[0.5]">
                        <div className="card bordered">
                          <figure>
                            <img
                              src="https://picsum.photos/id/1005/400/250"
                              alt="Placeholder"
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="flex-[0.5]">
                        <div className="card bordered">
                          <figure>
                            <img
                              src="https://picsum.photos/id/1005/400/250"
                              alt="Placeholder"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-3">
                <button
                  disabled={isSubmitting || !dirty || !isValid}
                  className="btn btn-wide"
                  type="submit"
                >
                  Save
                </button>
                <button className="btn btn-wide" onClick={() => {
                  onClose && onClose();
                }}>
                  Cancel
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
}

export default ProductEditor;
