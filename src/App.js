import "./App.css";
import { BlogProvider } from "./context/blog/BlogContext";
import Posts from "./components/Posts";

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <h1>BLOG FRONTEND</h1>
        <p>testing</p>
        <Posts />
      </div>
    </BlogProvider>
  );
}

export default App;
