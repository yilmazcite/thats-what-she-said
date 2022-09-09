import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddQuote from "./components/AddQuote";
import RandomQuote from "./components/RandomQuote";

function App() {
  return (
    <div>
      <Header />
      <AddQuote />
      <RandomQuote />
      <Footer />
    </div>
  );
}

export default App;
