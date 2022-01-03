import React from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from './ui/Theme'
import Footer from "./ui/Footer"
import { useState } from "react";
import LandingPage from "./LandingPage";

function App() {
  const [value, setValue] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/motocicletas" component={() => <div><h1>Motocicletas</h1></div>} />
          <Route exact path="/motocargas" component={() => <div>Motocargas</div>} />
          <Route exact path="/cascos" component={() => <div>Cascos</div>} />
          <Route exact path="/repuestos" component={() => <div>Repuestos</div>} />
          <Route exact path="/servicios" component={() => <div><h1>Servicios: 1, 2, 3</h1></div>} />
          <Route exact path="/servicio1" component={() => <div><h1>Servicio 1</h1></div>} />
          <Route exact path="/servicio2" component={() => <div><h1>Servicio 2</h1></div>} />
          <Route exact path="/servicio3" component={() => <div><h1>Servicio 3</h1></div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
