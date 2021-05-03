import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Layout from "./components/Layout";
import Navbar from "./components/navigation/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Works from "./components/Works";

const Content = styled.main`
  grid-row: 1/-1;
  grid-column: 1/-1;
  place-self: center;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  z-index: 0;
`;

function App() {
  const linksArr = ["works", "about", "contact"];

  return (
    <Router>
      <Layout>
        <Navbar links={linksArr}></Navbar>
        <Content>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/works" component={Works} />
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
