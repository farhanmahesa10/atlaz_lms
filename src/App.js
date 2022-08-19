import "./assets/css/App.css";
import Routing from "./config/Routing";
import ReactGA from 'react-ga';
const GA_ID = process.env.REACT_APP_ID_GA


function App() {
  ReactGA.initialize(GA_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
