import Header from "./components/Header";
import Contador from "./components/Contador";
import { ContextProvider } from "./ContextProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Contador />
      </ContextProvider>
    </div>
  );
}

export default App;
