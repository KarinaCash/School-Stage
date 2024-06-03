import React, { useEffect, useState } from "react";
import { getConfigValue } from "@ijl/cli";
import { useParams } from "react-router-dom";

import { Header } from "../components/account/account-header";
import { Block1 } from "../components/account/account-block1";
import { Footer } from "../components/teachers/teachers-footer";
import { Block2 } from "../components/account/account-block2";


const Account = () => {
  const [accountdata, setaccountData] = useState([]);
  const login = useParams().login;

  useEffect(() => {
      fetch(getConfigValue("school-stage.api")+'/account')
          .then(response => response.json())
          .then(catalogdata => {
              const el = catalogdata.data.find(element => element.login == login) 
              setaccountData(el);
          })
          .catch(error => {
              console.error('Error fetching catalog data:', error);
          });
  }, []);

  return (
    <>
      <Header/>
      <Block1 props = {accountdata} />
      <Block2 lessons = {accountdata.lessons} />
      <Footer/>
    </>
  );
};

export default Account;