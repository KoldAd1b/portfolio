import { ThemeProvider } from "styled-components";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/About";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Preloader />
        <Navbar />

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ContactPage />} path="/contact-me" />
        </Routes>

        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </div>
  );
}

export default App;
