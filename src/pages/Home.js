import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "./Search";
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/* Link */}
          <Link to={"about"}>About</Link>
          {/* Link */}
          <Link to={"store"}>Store</Link>
        </div>
        <div className="home__headerRight">
          {/* Link */}
          <Link to={"gmail"}>Gmail</Link>
          {/* Link */}
          <Link to={"images"}>Images</Link>
          {/* Icon */}
          <AppsIcon />
          {/* Avathar */}
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Google_logo_%282010-2013%29.svg"
          alt="logo"
        ></img>

        <div className="home__inputContainer">
          {/* <search /> */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
