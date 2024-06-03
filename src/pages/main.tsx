import React from "react";

import { Header } from "../components/main/main-header";
import { Footer } from "../components/main/main-footer";
import { Block123 } from "../components/main/block123";
import { Block } from "../components/main/main-block";

const Main = () => {
  return (
    <>
      <Header/>
      <Block/>
      <Block123/>
      <Footer/>
    </>
  );
};

export default Main;