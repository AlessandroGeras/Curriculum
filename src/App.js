import { createGlobalStyle } from "styled-components";
import Navbar from "./Components/navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";
import ApiReducer from "./microservices/apiReducer";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ApiReducer />
      <Router>
        <Navbar />
        <MainRoutes />
      </Router>
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
   
  }
`;

export default App;
