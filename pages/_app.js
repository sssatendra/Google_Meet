import 'tailwindcss/tailwind.css'
import { Provider as AuthProvider } from "next-auth/client"
import Router from 'next/router';
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#1AF900",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish)


function MyApp({ Component, pageProps }) {
  return (<AuthProvider session={pageProps.session}>
    <Component {...pageProps} />
  </AuthProvider>)
}

export default MyApp
