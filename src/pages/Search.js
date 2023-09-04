import React, { useState } from "react";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from "@mui/material";
function Search() {
const[input,setInput] = useState("");

    const search = e =>{
        e.preventDefault();
        console.log("You hit Search");
    }
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MicIcon />
      </div>
      <div className="search_buttons">
        <Button variant="outline" onClick={search}>
          Google Search
        </Button>
        <Button variant="outline">I'am Feeling Lucky</Button>
      </div>
    </div>
  );
}

export default Search;
