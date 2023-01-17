import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/blog/BlogContext";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";
import AsideNav from "./components/AsideNav";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import About from "./pages/About";

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
                <Route path="/about" element={<About />} />
                <Route path="/posts/:postId" element={<PostPage />} />
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
