import { Routes as RoutesDOM, Route } from "react-router-dom";

import Home from "../pages/Home";
import Teste from "../pages/Teste";

const Routes = () => {
  return (
    <RoutesDOM>
      {/* <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<PageNotFound />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/teste" element={<Teste />} />
    </RoutesDOM>
  );
};

export default Routes;
