import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/LoginPage";
import SignUp from "./containers/SignUp";
import Profile from "./containers/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./ThemeProvider/theme";
import store from "./containers/app/store";
import { Provider } from "react-redux";
import ProductDetails from "./containers/ProductDetails";
import AuthProvider from "./Utils/AuthProvider";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path="profile"
              element={
                <AuthProvider>
                  <Layout>
                    <Profile />
                  </Layout>
                </AuthProvider>
              }
            />
            <Route
              path="product-details/:productId"
              element={
                <AuthProvider>
                  <Layout>
                    <ProductDetails />
                  </Layout>
                </AuthProvider>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
