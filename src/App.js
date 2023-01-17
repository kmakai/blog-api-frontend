import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/blog/BlogContext";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AsideNav from "./components/AsideNav";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="aside-main">
            <AsideNav />
            <main>
              <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;
