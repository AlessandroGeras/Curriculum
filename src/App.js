import { createGlobalStyle } from "styled-components";
import Navbar from "./Components/navbar/navbar";
import ApiSpeech from './microservices/apiSpeech';
import ApiAbout from './microservices/apiAbout';
import ApiTags from './microservices/apiTags';
import ApiJobs from './microservices/apiJobs';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from "./routes";

const App = () => {

  return <div>
     <GlobalStyle />
     <ApiSpeech />
    <ApiAbout />
    <ApiTags />
    <ApiJobs />   
    <Router>
       <Navbar />
          <MainRoutes />
        </Router>
  </div>;
};

const GlobalStyle = createGlobalStyle`
  body {
   
  }
`;

export default App;
