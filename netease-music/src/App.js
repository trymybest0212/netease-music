import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import routes from "./router";
import store from "./store/index";

import Header from "./pages/components/header";
import Footer from "./pages/components/footer";

export default function App() {
  return (
      <Provider store={store}>
      <HashRouter>
        <Header />
         {renderRoutes(routes)} 
         <Footer />
      </HashRouter>
    </Provider>
  );
}
