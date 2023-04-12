import Header from "@components/Header";
import React from "react";

interface ILayoutProps {
  children: JSX.Element;
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
