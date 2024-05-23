import React from "react";

import Navbar from "./navbar";

import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  pageLoading: boolean;
}

const custom_Layout = (props: LayoutProps) => (
  <>
    <Head>
      <title>McGill IGEM</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </Head>
    <div className="">
    <Navbar pageLoading={props.pageLoading}/>
      {props.children}
    </div>
  </>
);

export default custom_Layout;