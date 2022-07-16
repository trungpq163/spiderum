import '../styles/index.scss';
import { NextPage } from 'next';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { wrapper } from '@spiderum/shared/data-access/redux';
import { CssBaseline } from '@nextui-org/react';

import type { AppProps } from 'next/app';
import Router from 'next/router';
import nProgress from 'nprogress';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const App: NextPage<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="shortcut icon"
          href="/icon/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <ToastContainer />
      <CssBaseline />

      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
