import React from "react";
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import New from "./components/New/New";
import AboutUs from "./components/AboutUs/AboutUs";
import ForMen from "./components/ForMen/ForMen";
import ForWomen from "./components/ForWomen/ForWomen";
import { Route, Routes } from "react-router";

function App(props) {

  return (
    <div className={s.wraper}>
      <Header />
      <div className={s.body_wraper}>
        <Routes>
          <Route
            path="/shop"
            element={<Shop productForAll={props.state.ShopPage} />}
          />
          <Route path="/new" element={<New />} />
          <Route
            path="/formen"
            element={<ForMen productForMen={props.state.ForMenPage} />}
          />
          <Route
            path="/forwomen"
            element={<ForWomen productForWomen={props.state.ForWomenPage} />}
          />
          <Route
            path="/aboutus"
            element={
              <AboutUs
                about={props.state.AboutUsPage}
                dispatch={props.dispatch}
                
                
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
