import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "./router";

import Header from "./pages/components/header";
import Footer from "./pages/components/footer";

export default function App() {
  return (
    <HashRouter>
      <Header /> {renderRoutes(routes)} <Footer />
    </HashRouter>
  );
}
