import React from "react";

import { Header } from "../components/account/account-header";
import { Block1 } from "../components/account/account-block1";
import { Footer } from "../components/teachers/teachers-footer";
import { Block2 } from "../components/account/account-block2";
import './style_account.css'

const Account = () => {
  return (
    <>
      <Header/>
      <Block1/>
      <Block2/>
      <Footer/>
    </>
  );
};

export default Account;