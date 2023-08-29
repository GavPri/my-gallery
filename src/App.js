import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
