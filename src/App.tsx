import { Typography } from "antd";
import { Providers } from "./components/Providers";
import { Questions } from "./components/Questions";

function App() {
  return (
    <Providers>
      <Typography.Title level={5}>Questionare</Typography.Title>
      <Questions />
    </Providers>
  );
}

export default App;
