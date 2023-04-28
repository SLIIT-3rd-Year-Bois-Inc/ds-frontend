import Link from "next/link";
import React from "react";
import { loginSchema } from "../../../schema/schema";
import { Formik } from "formik";
import { useMutation } from "react-query";
import axios from "axios";
import { Config } from "../../../config/endpoints";

interface AuthDetails {
  email: string;
  password: string;
}
function CustomerAuth() {
  const mutation = useMutation({
    mutationFn: async (authDetails: AuthDetails) => {
      let resp = await axios.post(
        `${Config.apiEndpoint}/auth/login`,
        authDetails
      );
      console.log("resafsveraerreg", resp.status);
      return resp.data;
    },
  });

  const authenticate = async ({ email, password }: AuthDetails) => {
    mutation.mutate({ email, password });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid grid-rows-[auto_auto] mt-[calc(10em+5vh)] p-6 w-96 bg-base-200 rounded-lg">
        <div className="prose mb-4 text-center">
          <h2>Herbal Haven Login</h2>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={authenticate}
          ///yup
          validationSchema={loginSchema}
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
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn my-4 w-full"
                  >
                    Login
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>

        <div className="prose text-center">
          <Link href="/customer/forgot">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerAuth;
