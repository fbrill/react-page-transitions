import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps} key={router.asPath} />;
    </AnimatePresence>
  );
}
export default MyApp;
