import MainContainer from "./MainContainer/MainContainer";
import Navbar from "./Navbar/Navbar";
import Input from "./Input/Input";
import postContext from "../provider/PostProvider";
import { useState } from "react";

function SocialApp() {
  const [posts, setPost] = useState([]);
  return (
    <div>
      <postContext.Provider value={{ posts, setPost }}>
        <Navbar />
        <Input />
        <MainContainer />
      </postContext.Provider>
    </div>
  );
}

export default SocialApp;
