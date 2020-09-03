import '../styles/globals.css';
import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}