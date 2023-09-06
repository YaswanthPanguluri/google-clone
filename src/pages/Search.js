import React, { useState } from "react";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from "@mui/material";
//import { useHistory } from "react-router-dom";   
import {useNavigate} from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";

function Search({hideButtons = false}) {
const [{},dispatch] = useStateValue();
const[input,setInput] = useState("");
//const history = useHistory();  
const navigate = useNavigate();

    const search = e =>{
        e.preventDefault();
        console.log("You hit Search >>",input); //Remove
        // Do some thing with input
        // come back and fix it
        //history.push("/Search");

        dispatch({
            type : actionTypes.SET_SEARCH_TERM,
            term : input
        })
        navigate("/Search");

    };
  return (
    <form className="search">
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
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" variant="outline" onClick={search}>
            Google Search
          </Button>
          <Button variant="outline">I'am Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button className = "search_buttonsHidden" type="submit" variant="outline" onClick={search}>
            Google Search
          </Button>
          <Button className = "search_buttonsHidden" variant="outline">I'am Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
