import "./App.css";
import Nav from "./components/Nav";
import Blog from "./components/Blog";
import Saved from "./components/Saved";
import Login from "./components/Login";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
      <Blog />
      <Saved />
      <Login />
    </div>
  );
}

export default App;
