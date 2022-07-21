import Nav from "./components/Nav";
import Home from "./Home";

import Saved from "./components/Saved";
import Login from "./components/Login";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Nav />

      <Search />
      <Home />

      <Saved />
      <Login />
    </div>
  );
}

export default App;
