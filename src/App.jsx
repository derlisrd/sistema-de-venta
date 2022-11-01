import Pages from "./Pages";
import Layout from './Layout'
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
