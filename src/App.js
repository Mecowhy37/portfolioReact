import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Layout from "./components/Layout";
import Navbar from "./components/navigation/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const Content = styled.main`
  grid-row: 2/3;
  grid-column: 2/3;
  place-self: center;
`;

function App() {
  const linksArr = ["about", "portfolio", "contact"];

  return (
    <Router>
      <Layout>
        <Navbar links={linksArr}></Navbar>
        <Content>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
