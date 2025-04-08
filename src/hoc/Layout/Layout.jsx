import React, { useState } from "react";
import Auxilliary from "../Auxilliary/Auxilliary";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer]  = useState(false);
  

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerOpenedHandler = () => {
    setShowSideDrawer(true);
  };

    return (
      <Auxilliary>
        <Navbar disappear={sideDrawerOpenedHandler} />
        <SideDrawer
          open={showSideDrawer}
          closed={sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{props.children}</main>
      </Auxilliary>
    );
}

export default Layout;