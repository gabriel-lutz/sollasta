import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import Product from "./pages/Product";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/product/:id" exact component={Product} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
