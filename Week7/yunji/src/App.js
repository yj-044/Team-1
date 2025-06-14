import { GlobalStyle } from "./styles/globalStyles";
import Main from "./pages/Main";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
}

export default App;
