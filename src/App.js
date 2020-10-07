import React from "react";
import Routes from "./routes";
import { Provider as ProductProvider } from "./context/productContext";

const App = () => {
  return (
    <ProductProvider>
      <Routes />
    </ProductProvider>
  );
};

export default App;
