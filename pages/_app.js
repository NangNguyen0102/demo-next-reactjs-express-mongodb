import React from "react";
import { wrapper } from "../redux/store";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const appProps = Component.getInitialProps
//       ? await Component.getInitialProps(ctx)
//       : {};

//     console.log("appProps", appProps);
//     return { appProps: appProps };
//   }

//   render() {
//     const { Component, appProps } = this.props;

//     return (
//       <Provider store={store}>
//         <Component {...appProps} />
//       </Provider>
//     );
//   }
// }

export default wrapper.withRedux(MyApp);
