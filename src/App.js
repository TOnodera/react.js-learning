import HeaderContents from "./components/organisms/HeaderContents";
import logo from "./images/pills.png";

function App() {
  return (
    <div className="App">
      <HeaderContents logo={logo} />
      <main className="main-contents">main</main>
      <footer className="footer-contents">footer</footer>
    </div>
  );
}

export default App;
