import React from "react";
import ReactDOM from "react-dom";
import Header from "./Containers/Header/header"
import Footer from "./Containers/Footer/footer"
import Main from "./Containers/Main/main"
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
