import React from 'react';
import App, { Container } from 'next/app';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn:
    'http://5d7bbe7b206b4ee9b99ae3a478298dc1:33e4b612c92740a0bbf111dcacba2993@192.168.0.201:29177/6',
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
