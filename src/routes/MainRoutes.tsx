
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Categories from "../pages/Categories";
import About from "../pages/About";
import Login from "../pages/Login";
import BlogDetail from "../pages/BlogDetail";
import { AuthProvider, PrivateRoute } from "../context/AuthContext";
import { SearchProvider } from "../context/SearchContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const noNavFooterPaths = ["/admin", "/login"];
  const hideNavFooter = noNavFooterPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideNavFooter && <Footer />}
    </div>
  );
};

const MainRoutes = () => {
  return (
    <SearchProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              />
              <Route path="/categories" element={<Categories />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </SearchProvider>
  );
};

export default MainRoutes;
