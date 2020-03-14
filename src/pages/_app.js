import React from "react";
import App from "next/app";
import Head from "next/head";
import { withRouter } from "next/router";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "../styles.css";

import theme from "../utils/theme";
import Layout from "../components/templates/layouts/Layout";
import {
  ABOUT_PATH,
  FEEDBACK_PATH,
  INDEX_PATH,
  SETTINGS_PATH,
  TERMS_PATH,
  TUTORIAL_PATH
} from "../constants/pageUrls";
import { MainButtonContextProvider } from "../contexts/mainButtonContext";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  handleChangeActiveTab = tabIndex => {
    const { router } = this.props;
    switch (tabIndex) {
      case 0:
        router.push(INDEX_PATH);
        break;
      case 2:
        router.push(SETTINGS_PATH);
        break;
      default:
        break;
    }
  };

  getActiveTab = () => {
    const { router } = this.props;
    switch (router.pathname) {
      case INDEX_PATH:
        return 0;
      case SETTINGS_PATH:
      case ABOUT_PATH:
      case FEEDBACK_PATH:
      case TUTORIAL_PATH:
      case TERMS_PATH:
        return 2;
      default:
        return 0;
    }
  };

  render() {
    const { Component, pageProps } = this.props;
    const activeTab = this.getActiveTab();

    return (
      <React.Fragment>
        <Head>
          <title>台灣置物櫃地圖 Taiwan Locker Map</title>

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainButtonContextProvider>
            <Layout
              activeTab={activeTab}
              onChangeActiveTab={this.handleChangeActiveTab}
            >
              <Component {...pageProps} />
            </Layout>
          </MainButtonContextProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRouter(MyApp);
