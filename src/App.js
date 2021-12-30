import React from "react";
import "./App.css";
import HomePage from "./pages/homepages/homepage.component";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../src/components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "../src/firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeAuthObserver = null;

  componentDidMount() {
    this.unSubscribeAuthObserver = onAuthStateChanged(auth, (user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeAuthObserver();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
