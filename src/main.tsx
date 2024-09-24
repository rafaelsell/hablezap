import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./pages";
import { globalTheme } from "./theme";
import { Layout } from "./Layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={globalTheme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  </StrictMode>
);
