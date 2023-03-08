import "./App.css";
import Greeting from "./Greeting";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
