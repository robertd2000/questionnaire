import { Providers } from "./components/Providers";
import { Questions } from "./components/Questions";
import { Header } from "./components/Header";

function App() {
  return (
    <Providers>
      <Header />
      <Questions />
    </Providers>
  );
}

export default App;
