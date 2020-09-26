import "../styles/globals.css";
import React from "react";
import App from "next/app";
import Layout from "../components/Layout";
import { AuthContext } from "../context/AuthContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "semantic-ui-css/semantic.min.css";

export default class MyApp extends App {
  render() {
  const { Component, pageProps } = this.props;
    return (
      <AuthContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
       </AuthContext>
    );
  }
}
