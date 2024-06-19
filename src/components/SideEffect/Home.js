import React, { useContext } from "react";

import Card from "../UI/Card";
import styles from "./Home.module.css";
import Button from "../UI/Button";

import AuthContext from "../../store/auth-context";

const Home = () => {
  const { onLogout } = useContext(AuthContext);
  // console.log("ctx:", ctx);
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
