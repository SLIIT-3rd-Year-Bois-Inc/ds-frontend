import Link from "next/link";
import React from "react";
import { loginSchema } from "../../../schema/schema";
import { Formik } from "formik";
import { useMutation } from "react-query";
import axios from "axios";

interface AuthDetails {
  email: string;
  password: string;
}
function CustomerAuth() {
  const mutation = useMutation({
    mutationFn: (authDetails: AuthDetails) => {
      return axios.post("/todos", authDetails);
    },
  });

  const authenticate = async ({ email, password }: AuthDetails) => {
    mutation.mutate({ email, password });
  };
  
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col mt-[calc(10em+5vh)]">
        <div className="prose mb-4">
          <h1>Herbal Haven Login</h1>
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
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
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

        <div className="prose">
          <Link href="/customer/forgot">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerAuth;
